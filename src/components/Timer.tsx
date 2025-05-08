
import { useState, useEffect } from 'react';
import { TimerState } from '../types/simulation';

interface TimerProps {
  initialTime?: TimerState;
}

const Timer = ({ initialTime = { hours: 0, minutes: 0, seconds: 0 } }: TimerProps) => {
  const [time, setTime] = useState<TimerState>(initialTime);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        const newSeconds = prevTime.seconds + 1;
        const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
        const newHours = prevTime.hours + Math.floor(newMinutes / 60);
        
        return {
          hours: newHours,
          minutes: newMinutes % 60,
          seconds: newSeconds % 60
        };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0');
  };
  
  return (
    <div className="bg-white border border-dealSim-gray/20 rounded-md p-2 font-mono text-dealSim-navy text-lg">
      Timer: {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
    </div>
  );
};

export default Timer;
