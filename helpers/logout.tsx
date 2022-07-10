import Router from "next/router";
import { useSetRecoilState } from "recoil";
import { AuthAtom } from "recoilStore/AuthAtom";
import { AMAHLUBI_ACCESS_TOKEN, AMAHLUBI_REFRESH_TOKEN } from "../constants";
import { destroyTheCookie } from "./cookieHandler";

export default function () {
  const setAuth = useSetRecoilState(AuthAtom);

  destroyTheCookie(undefined, AMAHLUBI_ACCESS_TOKEN);
  destroyTheCookie(undefined, AMAHLUBI_REFRESH_TOKEN);
  setAuth({
    token: "",
    refreshToken: "",
  });
  Router.push("/");
}
