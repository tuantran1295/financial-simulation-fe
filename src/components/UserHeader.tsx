
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

interface UserHeaderProps {
  username: string;
  isTeam1?: boolean;
}

const UserHeader = ({ username, isTeam1 = true }: UserHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2">
      <div className="text-xl font-medium text-dealSim-navy">{username}</div>
      <div className="text-sm bg-dealSim-light px-2 py-1 rounded text-dealSim-navy font-semibold">
        {isTeam1 ? 'Team 1 (Input)' : 'Team 2 (Approval)'}
      </div>
      <Button variant="ghost" size="sm" className="text-dealSim-gray flex items-center gap-1">
        <LogOut size={16} /> Logout
      </Button>
    </div>
  );
};

export default UserHeader;
