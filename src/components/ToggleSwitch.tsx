
import { useEffect, useState } from 'react';

interface ToggleSwitchProps {
  value: 'TBD' | 'OK';
  onChange: (value: 'TBD' | 'OK') => void;
  disabled?: boolean;
}

const ToggleSwitch = ({ value, onChange, disabled = false }: ToggleSwitchProps) => {
  const [currentValue, setCurrentValue] = useState<'TBD' | 'OK'>(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const handleToggle = (newValue: 'TBD' | 'OK') => {
    if (disabled) return;
    setCurrentValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-md overflow-hidden border border-dealSim-gray/20">
      <button
        className={`px-3 py-1 text-sm font-medium transition-colors ${
          currentValue === 'TBD'
            ? 'bg-dealSim-coral text-white'
            : 'bg-transparent text-dealSim-gray hover:bg-gray-200'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={() => handleToggle('TBD')}
        disabled={disabled}
      >
        TBD
      </button>
      <button
        className={`px-3 py-1 text-sm font-medium transition-colors ${
          currentValue === 'OK'
            ? 'bg-dealSim-teal text-white'
            : 'bg-transparent text-dealSim-gray hover:bg-gray-200'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={() => handleToggle('OK')}
        disabled={disabled}
      >
        OK
      </button>
    </div>
  );
};

export default ToggleSwitch;
