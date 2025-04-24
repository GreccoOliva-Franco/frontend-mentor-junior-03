import { capitalize, cn } from "@/lib/utils";

export default function TimeFrameButton({ text, active = false, onClick }: Readonly<{
  active: boolean
  text: string;
  onClick: () => void;
}>) {
  return (
    <button 
      key={text}
      onClick={onClick}
      className={cn(
        'p-4 cursor-pointer',
        'lg:p-3',
        active && 'text-white'
      )}
    >
      { capitalize(text) }
    </button>
  );
}