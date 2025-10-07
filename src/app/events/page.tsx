'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import {
  DayPicker,
  DayButton,
  type DayButtonProps,
} from 'react-day-picker';
import { format, isSameDay, isValid, startOfMonth } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
import { events, type Event } from '@/lib/events-data';
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import { Highlighter } from '@/components/magicui/highlighter';

export default function EventsPage() {
  const today = useMemo(() => new Date(), []);
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  const [month, setMonth] = useState<Date>(startOfMonth(today));
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  function CustomDayButton(props: DayButtonProps) {
    const { day, modifiers, onClick, className, ...rest } = props;
    const date = day?.date;
    if (!date || !isValid(date)) return <DayButton {...props} />;

    const eventForDay = events.find((e) => isSameDay(e.date, date));

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      onClick?.(e);
      if (eventForDay) setSelectedEvent(eventForDay);
    };

    return (
      <DayButton
        {...rest}
        day={day}
        modifiers={modifiers}
        onClick={handleClick}
        className={[
        className ?? '',
            'w-full aspect-[5/6] md:aspect-[6/7] lg:aspect-square',
            'rounded-lg p-1 flex flex-col items-center justify-center',
            'bg-white/10 border border-white/30',
            'transition-colors hover:border-white focus:outline-none focus:ring-2 focus:ring-cyan-400',
        ].join(' ')}
      >
        <span className="text-sm leading-none">{format(date, 'd')}</span>
        {eventForDay && (
          <span
            className="mt-1 w-full px-1 text-center text-[11px] leading-tight truncate"
            title={eventForDay.title}
          >
            <Highlighter action="highlight" color="#007CF0" animationDuration={500}>
              {eventForDay.title}
            </Highlighter>
          </span>
        )}
      </DayButton>
    );
  }

  return (
    <div className="relative min-h-screen w-full px-4 pt-28 pb-16 md:px-8">
      <div className="w-full flex flex-col items-center">
        <h1 className="mb-8 text-center text-5xl font-bold text-white md:text-6xl">
          <Highlighter action="underline" color="#007CF0" strokeWidth={4}>
            Club Events
          </Highlighter>
        </h1>
        <div className="w-full mx-auto rounded-2xl border border-white/30 bg-transparent p-4 md:p-6 max-w-[clamp(320px,90vw,980px)]">
          <DayPicker
            month={month}
            onMonthChange={setMonth}
            mode="single"
            selected={selected}
            onSelect={setSelected}
            components={{ DayButton: CustomDayButton }}
            className="w-full text-white bg-transparent"
            classNames={{
              root: 'rdp-root w-full bg-transparent',
              months: 'w-full',
              month: 'w-full',
              month_caption: 'flex items-center justify-between border-b border-white/20 pb-2',
              caption_label: 'text-xl md:text-2xl font-semibold',
              nav: 'flex items-center gap-2',
              button_previous: 'h-8 w-8 rounded-full hover:bg-white/10 inline-flex items-center justify-center',
              button_next: 'h-8 w-8 rounded-full hover:bg-white/10 inline-flex items-center justify-center',
              chevron: 'fill-white',
              month_grid: 'w-full table-fixed',
              weekday: 'text-gray-300 uppercase text-[11px] tracking-wide text-center',
              day: 'rounded-lg',
              selected: 'bg-cyan-500/20 border-cyan-400 text-white',
              today: 'ring-2 ring-red-500',
              outside: 'text-white/40',
              disabled: 'opacity-40 pointer-events-none',
            }}
            
            styles={{
              root: { backgroundColor: 'transparent' },
              month: { backgroundColor: 'transparent' },
              month_grid: { backgroundColor: 'transparent' },
              weeks: { backgroundColor: 'transparent' },
            }}
          />
        </div>

        {/* Event Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/80 backdrop-blur-lg"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-lg cursor-default"
              >
                <NeonGradientCard neonColors={{ firstColor: '#ff2975', secondColor: '#00FFF1' }}>
                  <div className="p-4 text-white">
                    <Image
                      src={selectedEvent.imageUrl}
                      alt={selectedEvent.title}
                      width={500}
                      height={250}
                      className="mb-4 h-56 w-full rounded-lg object-cover"
                    />
                    <h2 className="mb-2 text-3xl font-bold">{selectedEvent.title}</h2>
                    <p className="mb-1 text-sm text-cyan-400">
                      {format(selectedEvent.date, "MMMM d, yyyy 'at' h:mm a")}
                    </p>
                    <p className="mb-6 text-gray-300">{selectedEvent.description}</p>
                    {selectedEvent.registerLink && selectedEvent.status === 'upcoming' && (
                      <a
                        href={selectedEvent.registerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-lg bg-cyan-500 px-6 py-2 font-semibold text-black transition hover:bg-cyan-400"
                      >
                        Register Now
                      </a>
                    )}
                  </div>
                </NeonGradientCard>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
