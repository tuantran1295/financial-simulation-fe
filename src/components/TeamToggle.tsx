
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { ArrowDownUp } from 'lucide-react';

interface TeamToggleProps {
  isTeam1: boolean;
  onToggle: (isTeam1: boolean) => void;
}

const TeamToggle = ({ isTeam1, onToggle }: TeamToggleProps) => {
  return (
    <div className="flex items-center space-x-4 bg-white p-3 rounded-lg border border-dealSim-gray/20">
      <div className="grid gap-2">
        <Label htmlFor="team-toggle" className="font-medium">
          Current Role: <span className="font-bold">{isTeam1 ? 'Team 1 (Input)' : 'Team 2 (Approval)'}</span>
        </Label>
        <div className="flex items-center space-x-2">
          <Switch
            id="team-toggle"
            checked={isTeam1}
            onCheckedChange={() => onToggle(!isTeam1)}
          />
          <div className="flex items-center space-x-1">
            <ArrowDownUp size={16} className="text-dealSim-gray" />
            <span className="text-sm text-dealSim-gray">Switch Teams</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamToggle;
