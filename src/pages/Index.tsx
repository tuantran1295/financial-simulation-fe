
import { useState, useCallback } from 'react';
import Timer from '@/components/Timer';
import StageDisplay from '@/components/StageDisplay';
import UserHeader from '@/components/UserHeader';
import FirstTimeGuidance from '@/components/FirstTimeGuidance';
import SimulationForm from '@/components/SimulationForm';
import ValuationDisplay from '@/components/ValuationDisplay';
import PieChart from '@/components/PieChart';
import Sidebar from '@/components/Sidebar';
import TeamToggle from '@/components/TeamToggle';
import ChatBox from '@/components/ChatBox';
import { SimulationState } from '@/types/simulation';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

const Index = () => {
  const [simulationState, setSimulationState] = useState<SimulationState>({
    ebitda: '$10,000,000',
    interestRate: '20%',
    multiple: '10x',
    factorScore: 2,
    companyName: 'FPT Information System',
    description: 'This company is #1 in Vietnam!',
  });

  const [isTeam1, setIsTeam1] = useState(true);

  const handleStateChange = (newState: SimulationState) => {
    setSimulationState(newState);
  };

  // Use useCallback to ensure this function doesn't change between renders
  const handleTeamToggle = (newIsTeam1: boolean) => {
    console.log("Team toggle called with:", newIsTeam1);
    setIsTeam1(newIsTeam1);
    
    // Set the new team state
    // setSimulationState((prevState) => {
    //   console.log("Previous state:", prevState);
    //   const newState = {
    //     ...prevState,
    //     isTeam1: newIsTeam1,
    //   };
    //   console.log("New state:", newState);
    //   return newState;
    // });
    
    // Show a toast notification
    toast.info(`Switched to ${newIsTeam1 ? 'Team 1 (Input)' : 'Team 2 (Approval)'} role`);
  };

  return (
    <div className="min-h-screen bg-dealSim-light">
      <div className="simulation-container">
        {/* Header */}
        <div className="bg-white rounded-lg border border-dealSim-gray/20 p-4 shadow-sm mb-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Timer initialTime={{ hours: 1, minutes: 54, seconds: 20 }} />
              <StageDisplay 
                currentStage="ANALYSIS" 
                nextStage="STRUCTURING" 
                remainingTime="1 hour" 
              />
            </div>
            <UserHeader username="John Doe" isTeam1={isTeam1} />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Sidebar */}
          <div className="lg:w-16">
            <Sidebar />
          </div>
          
          {/* Main Simulation Area */}
          <div className="flex-1">
            <FirstTimeGuidance />
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <SimulationForm 
                  initialState={simulationState}
                  onStateChange={handleStateChange}
                  isTeam1={isTeam1}
                />
              </div>
              
              <div className="flex flex-col space-y-4">
                <TeamToggle 
                  isTeam1={isTeam1}
                  onToggle={handleTeamToggle} 
                />
                
                <ValuationDisplay 
                  ebitda={simulationState.ebitda}
                  multiple={simulationState.multiple}
                  factorScore={simulationState.factorScore}
                />
                
                <div className="bg-white rounded-lg p-4 border border-dealSim-gray/20">
                  <h2 className="text-lg font-medium text-dealSim-navy mb-2 text-center">Interest Allocation</h2>
                  <PieChart interestRate={simulationState.interestRate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* ChatBox Component */}
      <ChatBox />
      
      <Toaster />
    </div>
  );
};

export default Index;
