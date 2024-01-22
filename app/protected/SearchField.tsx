// components/SearchField.tsx
import { on } from 'events';
import React, { ChangeEvent, useState } from 'react';

interface SearchFieldProps {
  value: string;
  onSearch: (value: string) => void;

}

const SearchField: React.FC<SearchFieldProps> = ({ value, onSearch }) => {
  const [location, setLocation] = useState<string>('');
  console.log(value);
  return (
    <div className=" h-min justify-center items-center bg-white p-3 h-14 rounded-full flex w-full">
      
        

          <input
            type="text"
            id="location"
            placeholder="Enter location..."
            value={location}
            onChange={(e) => {
              // Update the state whenever the user types in the search field
              // console.log(e.target.value);
              setLocation(e.target.value);

              // location = e.target.value;
            }}
            className="no-border  p-2 h-14 w-full focus:outline-none 
        "
          />
          <button
            onClick={() => {
              onSearch(location);
            }}
            className="bg-teal-600 text-white px-4 py-2 h-14 w-14 rounded-full hover:bg-teal-800 transition"
          >
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/search--v1.png" alt="search--v1"/>
          </button>
        </div>
      
    
  );
};

export default SearchField;
