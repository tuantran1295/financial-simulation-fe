
import { Stage } from '../types/simulation';

interface StageDisplayProps {
  currentStage: Stage;
  nextStage: Stage;
  remainingTime: string;
}

const StageDisplay = ({ currentStage, nextStage, remainingTime }: StageDisplayProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-white border border-dealSim-gray/20 rounded-md p-2 font-medium text-dealSim-navy">
        Stage: <span className="font-bold">{currentStage}</span>
      </div>
      <div className="bg-white border border-dealSim-gray/20 rounded-md mt-1 p-2 font-medium text-dealSim-navy">
        Next Stage: <span className="font-bold">{nextStage} - {remainingTime}</span>
      </div>
    </div>
  );
};

export default StageDisplay;
