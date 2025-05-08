
import { useEffect, useState } from 'react';

interface ValuationDisplayProps {
  ebitda: string;
  multiple: string;
  factorScore: number;
}

const ValuationDisplay = ({ ebitda, multiple, factorScore }: ValuationDisplayProps) => {
  const [valuation, setValuation] = useState("0");
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Parse inputs, defaulting to 0 if invalid
    const ebitdaValue = parseFloat(ebitda.replace(/[^\d.-]/g, '')) || 0;
    const multipleValue = parseFloat(multiple.replace(/[^\d.-]/g, '')) || 0;
    
    // Calculate valuation
    const calculatedValuation = ebitdaValue * multipleValue * factorScore;
    
    // Format the result
    const formattedValuation = calculatedValuation >= 1000000
      ? `$${(calculatedValuation / 1000000).toFixed(1)} million`
      : `$${calculatedValuation.toLocaleString()}`;
    
    setValuation(formattedValuation);
    
    // Trigger animation
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    
    return () => clearTimeout(timer);
  }, [ebitda, multiple, factorScore]);
  
  return (
    <div className={`bg-white border border-dealSim-gray/20 rounded-lg p-4 text-center ${isAnimating ? 'highlight-animation' : ''}`}>
      <h2 className="text-lg font-medium text-dealSim-navy mb-2">Valuation</h2>
      <div className="text-2xl font-bold text-dealSim-teal">{valuation}</div>
    </div>
  );
};

export default ValuationDisplay;
