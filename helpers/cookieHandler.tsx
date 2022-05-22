import Router from "next/router";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import redirectUser from "./redirect";

export function setTheCookie(key: string, value: any) {
  setCookie(null, key, value, {
    maxAge: 7 * 24 * 60 * 60,
    path: "/",
  });
}

export function parseTheCookie(context, cookieName: string) {
  const token = parseCookies(context)[cookieName];

  if (!token) {
    // redirectUser(context, "/login");
    return "";
  }

  return token;
}

export function destroyTheCookie(context, name) {
  destroyCookie(context, name);
}
