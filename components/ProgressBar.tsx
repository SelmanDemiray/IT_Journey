import React from 'react';

interface ProgressBarProps {
  percent: number;
  height?: number;
  bgColor?: string;
  fillColor?: string;
  labelColor?: string;
  showLabel?: boolean;
  animate?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percent,
  height = 8, 
  bgColor = 'bg-gray-200 dark:bg-gray-700',
  fillColor = 'bg-gradient-to-r from-green-500 to-blue-500',
  labelColor = 'text-gray-700 dark:text-gray-300',
  showLabel = false,
  animate = true
}) => {
  // Ensure percent is between 0 and 100
  const safePercent = Math.max(0, Math.min(100, percent));
  
  return (
    <div className="w-full">
      <div className={`w-full ${bgColor} rounded-full h-${height}`}>
        <div 
          className={`${fillColor} h-full rounded-full ${animate ? 'transition-all duration-500' : ''}`}
          style={{ width: `${safePercent}%` }}
          role="progressbar"
          aria-valuenow={safePercent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {showLabel && (
            <span className={`${labelColor} text-xs font-medium`}>
              {safePercent}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
