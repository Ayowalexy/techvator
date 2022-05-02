import { AMAHLUBI_ACCESS_TOKEN } from "../constants";
import Router from "next/router";
import { setCookie, parseCookies } from "nookies";
import redirectUser from "./redirect";

export function setTheCookie(key: string, value: any) {
  setCookie(null, key, value, {
    maxAge: 7 * 24 * 60 * 60,
    path: "/",
  });
}

export function parseTheCookie(context) {
  const token = parseCookies(context)[AMAHLUBI_ACCESS_TOKEN];

  if (!token) {
    redirectUser(context, "/login");
    return;
  }

  return token;
}
