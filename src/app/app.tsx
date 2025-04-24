'use client'

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import ActivityCard, { Activity, TimeFrame } from "./activity-card";
import TimeFrameButton from "./timeframe-button";
import Loading from "@/components/loading";

export default function App() {
    const designs = {
      work: { background: 'bg-Orange-300', icon: '/icon-work.svg' },
      play: { background: 'bg-Blue-300', icon: '/icon-play.svg' },
      study: { background: 'bg-Pink-400', icon: '/icon-study.svg' },
      exercise: { background: 'bg-Green-400', icon: '/icon-exercise.svg' },
      social: { background: 'bg-Purple-700', icon: '/icon-social.svg' },
      'self care': { background: 'bg-Yellow-300', icon: '/icon-self-care.svg' },
    };
    const [data, setData] = useState<Activity[]| null>(null);
    const [timeframe, setTimeFrame] = useState<TimeFrame>('daily');
    
    useEffect(() => {
      if (!data) {
        setTimeout(() => fetch('/data.json')
          .then(res => res.json())
          .then(data => setData(data)), 5000)
      }
    }, [data, designs])

    if (!data) {
      return <Loading />
    }

    return (
      <div className="flex flex-col justify-center items-center">
        <div className={cn(
          'grid grid-cols-1 h-screen w-screen px-6 py-12 gap-6',
          'sm:grid-cols-2 sm:place-content-center sm:max-w-5xl',
          'lg:grid-cols-4'
        )}>
          {/* Profile Card */}
          <div className={cn(
            'col-span-1 flex flex-col justify-evenly rounded-xl bg-Navy-900',
            'sm:row-span-2',
          )}>
            <div className={cn(
              'flex items-center gap-4 p-8 rounded-xl bg-Purple-700/90',
              'sm:h-2/3 sm:flex-col sm:gap-10'
            )}>
              <img
                src={'/image-jeremy.png'}
                alt="Jeremy's avatar"
                className="h-14 ring-3 rounded-full ring-white"
              />
              <div className="flex flex-col text-white">
                <h3 className="text-xs font-light">Report for</h3>
                <h2 className="font-light sm:text-3xl">Jeremy Robson</h2>
              </div>
            </div>
            <div className={cn(
              'grid grid-cols-3 gap-2 text-Navy-200/50',
              'lg:grid-cols-1 lg:gap-0'
            )}>
              { (['daily', 'weekly', 'monthly'] as TimeFrame[])
                .map(text => (
                  <TimeFrameButton
                    key={text}
                    text={text}
                    active={text === timeframe}
                    onClick={() => setTimeFrame(text)}
                  />
                ))
              }
            </div>
          </div>
          {/* Cards */}
          { data.map((data, index) => (
            <ActivityCard
              key={index}
              data={data}
              timeframe={timeframe}
              icon={designs[data.title.toLowerCase() as keyof typeof designs].icon}
              background={designs[data.title.toLowerCase() as keyof typeof designs].background}
            />))
          }
        </div>
      </div>
    );
}