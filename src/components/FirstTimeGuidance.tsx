
import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const FirstTimeGuidance = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedSimulation');
    if (hasVisited) {
      setIsFirstVisit(false);
      setIsOpen(false); // Close accordion on subsequent visits
    } else {
      localStorage.setItem('hasVisitedSimulation', 'true');
      setIsOpen(true); // Keep it open on first visit
    }
  }, []);

  return (
    <Accordion 
      type="single" 
      collapsible 
      value={isOpen ? "guidance" : undefined}
      onValueChange={(value) => setIsOpen(!!value)}
      className="w-full bg-white rounded-md border border-dealSim-gray/20 mb-4"
    >
      <AccordionItem value="guidance" className="border-none">
        <AccordionTrigger className="px-4 py-2 font-medium text-dealSim-navy hover:no-underline">
          First Time Guidance
        </AccordionTrigger>
        <AccordionContent className="px-4 py-4 text-dealSim-gray animate-fade-in">
          <p>
            Welcome to the Deal Negotiation Simulator! This tool helps you practice complex business negotiations in a risk-free environment.
          </p>
          <p className="mt-2">
            As Team 1, you'll input values for key financial terms like EBITDA and interest rates. These will be visible to Team 2, who can mark each term as "TBD" or "OK" to indicate their acceptance.
          </p>
          <p className="mt-2">
            The valuation will automatically update based on the formula: EBITDA × Multiple × Factor Score. Watch the pie chart to visualize how changes affect the interest allocation.
          </p>
          <p className="mt-2">
            Use the sidebar buttons to access helpful resources. Good luck with your negotiation!
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FirstTimeGuidance;
