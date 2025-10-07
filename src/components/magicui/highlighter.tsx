'use client';

import { useEffect, useRef } from 'react';
import type React from 'react';
import { useInView } from 'framer-motion';
import { annotate } from 'rough-notation';
import type { RoughAnnotation, RoughAnnotationConfig } from 'rough-notation/lib/model';

type AnnotationAction =
  | 'highlight'
  | 'underline'
  | 'box'
  | 'circle'
  | 'strike-through'
  | 'crossed-off'
  | 'bracket';

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number | [number, number] | [number, number, number, number];
  multiline?: boolean;
  isView?: boolean;
}

export function Highlighter({
  children,
  action = 'highlight',
  color = '#ffd1dc',
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<RoughAnnotation | null>(null);
  const roRef = useRef<ResizeObserver | null>(null);

  const isInView = useInView(elementRef, { once: true, margin: '-10%' });
  const shouldShow = !isView || isInView;

  const recreate = () => {
    const el = elementRef.current;
    if (!el) return;

    if (annotationRef.current) {
      annotationRef.current.remove();
      annotationRef.current = null;
    }

    const config: RoughAnnotationConfig = {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    };

    const ann = annotate(el, config);
    annotationRef.current = ann;
    ann.show();
  };

  useEffect(() => {
    if (!shouldShow) return;
    recreate();

    const el = elementRef.current;
    if (!el) return;

    let raf = 0;
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(recreate);
    };

    const ro = new ResizeObserver(schedule);
    ro.observe(el);
    if (el.parentElement) ro.observe(el.parentElement);
    roRef.current = ro;

    window.addEventListener('resize', schedule);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', schedule);
      if (roRef.current) {
        roRef.current.disconnect();
        roRef.current = null;
      }
      if (annotationRef.current) {
        annotationRef.current.remove();
        annotationRef.current = null;
      }
    };
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ]);

  return (
    <span
      ref={elementRef}
      className="relative inline bg-transparent"
      style={{
        overflowWrap: 'anywhere',
        whiteSpace: 'normal',
      }}
    >
      {children}
    </span>
  );
}
