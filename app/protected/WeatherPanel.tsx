import React, { useState } from 'react';
import WeatherInfo from './info';
import WeatherCondition from './WeatherCondition';
import ToggleSwitch from './Toogle';
import { saveCity } from '../db';
import { Session } from 'next-auth';
import { saveCityFunc } from './function';
import { toast } from 'react-toastify';

interface WeatherCardProps {
  weatherInfo: WeatherInfo;
  session: Session | null;
  setWeatherInfo(location: any): void // Use the interface as prop type
}

const WeatherApp: React.FC<WeatherCardProps> = ({ weatherInfo, setWeatherInfo, session }) => {
  const [temp, setTemp] = useState(weatherInfo.temperature);
  const [units, setUnits] = useState('°C');
  return (
    <div className="p-7 w-full  mx-auto overflow-auto rounded-lg shadow-lg flex flex-col bg-white  ">
      {/* Header */}
      <div className='flex flex-row justify-between' >
        <div className='flex items-center justify-between text-2xl text-teal-600'>

          <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/0D9488/marker.png" alt="marker" />
          <span>{weatherInfo.city}</span>
        </div>
        <div>
          <button
          onClick={() => {
            setWeatherInfo(undefined);
          }}
            className='bg-teal-300 text-white px-4 py-2 h-12 w-12 rounded-full hover:bg-teal-800 transition'
          >
            <img src="https://img.icons8.com/ios-glyphs/30/0D9488/search--v1.png" alt="search--v1" />
          </button>
        </div>
      </div>
      <div className='justify-center items-center flex p-10'>
        <WeatherCondition condition={weatherInfo.weatherCondition} />
      </div>
      <div className='justify-between items-center px-16 flex text-teal-600 flex-row'>
        <div className='flex flex-row'>
        <h1 className="font-bold text-6xl">{temp} </h1><span>{units}</span>
        </div>
        <ToggleSwitch onChange={(isChecked) => {
          if (isChecked) {
            setTemp(Math.round((weatherInfo.temperature * 9 / 5) + 32));
            setUnits('°F');
          } else {
            setTemp(weatherInfo.temperature);
            setUnits('°C');
          }
        }} />
      </div>
      <div className='justify-center items-start flex text-teal-600 flex-row pt-5 text-xl'>
        <p >{weatherInfo.weatherCondition}</p>
      </div>
      


      {/* Body */}
      <div className="bg-white px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">


          </div>
          
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-200 text-gray-700 text-center px-6 py-4">
        <div className="flex justify-between">
          <div>
            <p className="text-sm">Humidity</p>
            <p className="font-bold">{weatherInfo.humidity}%</p>
          </div>
          <div>
            <p className="text-sm">Wind Speed</p>
            <p className="font-bold">{weatherInfo.windSpeed}km/h</p>
          </div>
        </div>
      </div>
      <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 mt-3 rounded"
      onClick={() => {
        saveCityFunc(session?.user?.email ?? "", weatherInfo.city).then(() => {
          toast("City saved successfully");
        });
      }}
      >
  Save
</button>

    </div>
  );
};



export default WeatherApp;
