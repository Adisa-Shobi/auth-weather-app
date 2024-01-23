'use server';
import { Session } from "next-auth";
import { signOut } from "../auth";
import { saveCity } from "../db";
import WeatherInfo from "./info";

export async function logOut() {

  await signOut();
}

export async function saveCityFunc(email: string, city: string) {
  await saveCity(email, city);
}

export async function getLocations (location: string): Promise<WeatherInfo | undefined> {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.API_KEY}`)
      .then(response => response.json()).then(json => {
          console.log(json);
          if (json.cod === 404) {
              return;
          }
          let info: WeatherInfo = {
              city: json.name,
              country: json.sys.country,
              temperature: Math.round(json.main.temp),
              weatherCondition: json.weather[0].main,
              humidity: json.main.humidity,
              windSpeed: json.wind.speed
          }
          console.log(info);
          return info;
      })
}