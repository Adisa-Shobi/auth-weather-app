'use server';
import { Session } from "next-auth";
import { signOut } from "../auth";
import { saveCity } from "../db";

export async function logOut() {

  await signOut();
}

export async function saveCityFunc(email: string, city: string) {
  await saveCity(email, city);
}
