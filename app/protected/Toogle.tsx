// ToggleSwitch.tsx

import React, { useState } from 'react';

interface ToggleSwitchProps {
  onChange: (isChecked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onChange }) => {
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    const newState = !isChecked;
    setChecked(newState);
    onChange(newState);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className={`block w-14 h-8 rounded-full ${isChecked ? 'bg-teal-500' : 'bg-gray-300'}`}></div>
        <div
          className={`dot absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform ${
            isChecked ? 'transform translate-x-6' : 'transform translate-x-0'
          }`}
        ></div>
      </div>
      <div className="ml-3 text-teal-500 font-semibold">
        {isChecked ? '°F' : '°C'}
      </div>
    </label>
  );
};

export default ToggleSwitch;
