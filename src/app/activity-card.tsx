import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

type TimeFrameActivity = { current: number, previous: number };
export type TimeFrame = 'daily' | 'weekly' | 'monthly';
export type Activity = {
    title: string;
    timeframes: Record<TimeFrame, TimeFrameActivity>
}

export default function ActivityCard({ 
    icon, background, data, timeframe
}: {
    data: Activity;
    timeframe: TimeFrame;
    icon: string;
    background: ClassValue;
    className?: ClassValue;
}) {
    function getCurrentMessage(): string {
        return `${data.timeframes[timeframe].current}hrs`;
    }

    function getPreviousMessage(): string {
        const prefixes: Record<TimeFrame, string> = {
            daily: 'Yesterday -',
            weekly: 'Last week -',
            monthly: 'Last month -'
        }
        const n = data.timeframes[timeframe].previous;

        return `${prefixes[timeframe]} ${n}hr${n === 1 ? '' : 's'}` ;
    }

    return (
        <div className={cn(
            'col-span-1 flex flex-col h-40 justify-end overflow-hidden rounded-xl relative',
            'sm:h-50',
            background
        )}>
            <img 
                src={icon}
                alt={data?.title}
                className="absolute -top-2.5 right-4"
            />
            <div className={cn(
                'flex flex-col justify-center h-3/4 gap-1 p-4 rounded-t-2xl text-white bg-Navy-900 z-1',
                'sm:gap-4'
            )}>
                <div className="flex w-full justify-between items-center">
                    <h1 className="font-bold sm:font-normal">{ data.title }</h1>
                    <img 
                        src={'/icon-ellipsis.svg'}
                        alt="text-white size-3"
                    />
                </div>
                <div className={cn(
                    'flex w-full justify-between items-center gap-2',
                    'sm:flex-col sm:items-start'
                )}>
                    <h2 className="text-3xl sm:text-4xl sm:font-light">{ getCurrentMessage() }</h2>
                    <p className="text-sm font-light text-Navy-200 sm:text-xs">{ getPreviousMessage() }</p>
                </div>
            </div>
        </div>
    );
}