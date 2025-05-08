
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Video, FileText } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Sidebar = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isTextOpen, setIsTextOpen] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col space-y-4">
      {/* Video Button */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            className={`bg-white p-4 h-auto border border-dealSim-gray/20 flex flex-col items-center justify-center ${isMobile ? 'w-full' : 'aspect-square'}`}
          >
            <Video size={24} className="text-dealSim-navy" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Instructional Video</DialogTitle>
          </DialogHeader>
          <div className="mt-4 aspect-video bg-gray-100 flex items-center justify-center rounded-md">
            <div className="text-center p-4">
              <Video size={48} className="mx-auto mb-2 text-dealSim-gray" />
              <p className="text-dealSim-gray">This is where a video would be displayed.</p>
              <p className="text-sm text-dealSim-gray/70">This is just a placeholder in the simulation.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Text Button */}
      <Dialog open={isTextOpen} onOpenChange={setIsTextOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            className={`bg-white p-4 h-auto border border-dealSim-gray/20 flex flex-col items-center justify-center ${isMobile ? 'w-full' : 'aspect-square'}`}
          >
            <FileText size={24} className="text-dealSim-navy" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Additional Information</DialogTitle>
          </DialogHeader>
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-dealSim-navy">
              This negotiation simulation is designed to help you practice making business deals under realistic conditions. The key terms you're negotiating include:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-dealSim-navy">
              <li>EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization)</li>
              <li>Interest rate on financing</li>
              <li>Valuation multiple</li>
              <li>Company-specific risk factors</li>
            </ul>
            <p className="mt-2 text-dealSim-navy">
              Remember that your goal is to reach an agreement that satisfies both parties while maximizing value for your side. Pay attention to how each term affects the overall valuation and consider strategic trade-offs between different terms.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Sidebar;
