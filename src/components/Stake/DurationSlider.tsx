import { formatDuration } from "@/helpers";

interface DurationSliderProps {
  minDays: number;
  maxDays: number;
  value: number; // Added controlled value
  onChange: (value: number) => void; // Added callback for updates
}

const DurationSlider: React.FC<DurationSliderProps> = ({
  minDays,
  maxDays,

  value,
  onChange,
}) => {
  return (
    <div className="w-full mx-auto py-8">
      <div className="flex justify-between items-center">
        <span className="font-medium">Duration</span>
        <span className="text-xs">{formatDuration(value)}</span>
      </div>

      <input
        type="range"
        min={minDays}
        max={maxDays}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full mt-2"
      />
    </div>
  );
};

export default DurationSlider;
