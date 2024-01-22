
import { auth, signOut } from 'app/auth';
import SearchField from './SearchField';
import { useEffect, useState } from 'react';
import SignOut from './SignOut';
import WeatherPanel from './WeatherPanel';
import WeatherInfo from './info';
import WeatherWidget from './WeatherWidget';
import { log } from 'console';
import { getUser } from '../db';


export default async function ProtectedPage() {




  let session = await auth();

  

  let cityName: string | null = null;
  if (session !== null) {
   await getUser(session?.user?.email ?? '').then((resp) => {
      cityName = resp[0].city;
      console.log(cityName);
   });
  }

  

  return (
    <div className='bg-teal-600 h-screen justify-center items-center flex '>
      <WeatherWidget session={session} city={cityName}/>
    </div>

  );
}


