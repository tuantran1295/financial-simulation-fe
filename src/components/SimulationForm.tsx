
import { useState, useEffect } from 'react';
import { SimulationState, FieldStatus } from '../types/simulation';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import ToggleSwitch from './ToggleSwitch';
import { toast } from '@/components/ui/sonner';

interface SimulationFormProps {
  initialState: SimulationState;
  onStateChange: (newState: SimulationState) => void;
  isTeam1: boolean;
}

const SimulationForm = ({ initialState, onStateChange, isTeam1 }: SimulationFormProps) => {
  const [formData, setFormData] = useState<SimulationState>(initialState);
  const [statusData, setStatusData] = useState<FieldStatus>({
    ebitda: 'TBD',
    interestRate: 'TBD',
    multiple: 'TBD',
    factorScore: 'TBD',
    companyName: 'TBD',
    description: 'TBD'
  });

  const handleInputChange = (field: keyof SimulationState, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Reset the status to TBD whenever a field value changes
    if (isTeam1) {
      setStatusData(prev => ({
        ...prev,
        [field]: 'TBD'
      }));
      
      // Show toast notification
      toast.info(`${field.charAt(0).toUpperCase() + field.slice(1)} has been modified and needs approval.`);
    }
  };

  // Update parent component whenever formData changes
  useEffect(() => {
    onStateChange(formData);
  }, [formData, onStateChange]);

  const handleStatusToggle = (field: keyof FieldStatus, value: 'TBD' | 'OK') => {
    if (!isTeam1) {
      setStatusData(prev => ({
        ...prev,
        [field]: value
      }));

      toast(`${field.charAt(0).toUpperCase() + field.slice(1)} marked as ${value}`);
    }
  };

  const handleSubmit = () => {
    const allFieldsOk = Object.values(statusData).every(status => status === 'OK');
    
    if (allFieldsOk) {
      toast.success("All terms accepted! Proceeding to next stage.");
    } else {
      toast.warning("Some terms are still marked as TBD. Please review and try again.");
    }
  };

  const formatCurrency = (value: string) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/[^\d.]/g, '');
    
    // Format as currency
    if (numericValue) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      });
      return formatter.format(Number(numericValue));
    }
    return '$0';
  };

  const formatPercentage = (value: string) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/[^\d.]/g, '');
    
    // Format as percentage
    if (numericValue) {
      return `${numericValue}%`;
    }
    return '0%';
  };

  const formatMultiple = (value: string) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/[^\d.]/g, '');
    
    // Format as multiple
    if (numericValue) {
      return `${numericValue}x`;
    }
    return '0x';
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-dealSim-gray/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Inputs */}
        <div className="space-y-6">
          {/* EBITDA Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-dealSim-navy font-medium">EBITDA:</label>
              <ToggleSwitch 
                value={statusData.ebitda} 
                onChange={(value) => handleStatusToggle('ebitda', value)}
                disabled={isTeam1}
              />
            </div>
            <Input 
              value={formData.ebitda} 
              onChange={(e) => handleInputChange('ebitda', formatCurrency(e.target.value))}
              className="border-dealSim-gray/20" 
              disabled={!isTeam1}
            />
          </div>

          {/* Interest Rate Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-dealSim-navy font-medium">Interest Rate:</label>
              <ToggleSwitch 
                value={statusData.interestRate} 
                onChange={(value) => handleStatusToggle('interestRate', value)}
                disabled={isTeam1}
              />
            </div>
            <Input 
              value={formData.interestRate} 
              onChange={(e) => handleInputChange('interestRate', formatPercentage(e.target.value))}
              className="border-dealSim-gray/20"
              disabled={!isTeam1}
            />
          </div>

          {/* Multiple Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-dealSim-navy font-medium">Multiple:</label>
              <ToggleSwitch 
                value={statusData.multiple} 
                onChange={(value) => handleStatusToggle('multiple', value)}
                disabled={isTeam1}
              />
            </div>
            <Input 
              value={formData.multiple} 
              onChange={(e) => handleInputChange('multiple', formatMultiple(e.target.value))}
              className="border-dealSim-gray/20"
              disabled={!isTeam1}
            />
          </div>

          {/* Factor Score Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-dealSim-navy font-medium">Factor Score:</label>
              <ToggleSwitch 
                value={statusData.factorScore} 
                onChange={(value) => handleStatusToggle('factorScore', value)}
                disabled={isTeam1}
              />
            </div>
            <div className="space-y-2">
              <Slider 
                value={[formData.factorScore]} 
                min={1} 
                max={5} 
                step={1}
                onValueChange={(vals) => handleInputChange('factorScore', vals[0])}
                disabled={!isTeam1}
              />
              <div className="flex justify-between text-sm text-dealSim-gray">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
            </div>
          </div>

          {/* Company Name Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-dealSim-navy font-medium">Company Name:</label>
              <ToggleSwitch 
                value={statusData.companyName} 
                onChange={(value) => handleStatusToggle('companyName', value)}
                disabled={isTeam1}
              />
            </div>
            <Input 
              value={formData.companyName} 
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              className="border-dealSim-gray/20"
              disabled={!isTeam1}
            />
          </div>

          {/* Description Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-dealSim-navy font-medium">Description:</label>
              <ToggleSwitch 
                value={statusData.description} 
                onChange={(value) => handleStatusToggle('description', value)}
                disabled={isTeam1}
              />
            </div>
            <Textarea 
              value={formData.description} 
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="border-dealSim-gray/20 resize-none h-32"
              disabled={!isTeam1}
            />
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-end">
        <Button 
          onClick={handleSubmit} 
          className="bg-dealSim-teal hover:bg-dealSim-teal/80"
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default SimulationForm;
