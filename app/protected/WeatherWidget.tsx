"use client";
import { use, useEffect, useState } from "react";
import WeatherInfo from "./info";
import SearchField from "./SearchField";
import WeatherPanel from "./WeatherPanel";
import { signOut } from "../auth";
import { Session } from "next-auth";
import { getLocations, logOut } from "./function";

interface weatherWidetProps {
    session: Session | null;
    city: string | null;
}

const WeatherWidget: React.FC<weatherWidetProps> = ({ session, city }) => {
    let [location, setLocation] = useState<string>('');
    let [weatherInfo, setWeatherInfo] = useState<WeatherInfo>();


    const handleSearch = (newLocation: string) => {
        // Handle the search logic using the 'location' state
        setLocation(newLocation);
        getLocations(newLocation).then((info) => {
            setWeatherInfo(info);
        });

    };



    

    useEffect(() => {
        console.log(city);
        if (city !== null && !weatherInfo) {
            getLocations(city).then((info) => {
                setWeatherInfo(info);
            });
            
        }
    }, []);


    return (
        <div className="w-5/12 min-w-80 h-full flex flex-col justify-center items-center text-gray">
            {

                !weatherInfo ? <div className="w-full flex flex-col justify-center items-center" ><SearchField value={location} onSearch={handleSearch} /> <button
                    onClick={async () => {
                        logOut();
                    }}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-bold h-14 my-10 px-4 rounded-full flex flex-row justify-center items-center pl-4 py-2 pr-5 text-teal-600 w-max">
                    <img height='40' width='40' src="https://img.icons8.com/fluency-systems-regular/48/0D9488/user--v1.png" alt="user--v1" />
                    Logout
                </button></div> : <WeatherPanel weatherInfo={weatherInfo} setWeatherInfo={setWeatherInfo} session={session} />
            }



            {/* You are logged in as {session?.user?.email} */}
            {/* <SignOut /> */}
        </div>
    );
};

export default WeatherWidget;