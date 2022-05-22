import dayjs from "dayjs";
import jwtDecode from "jwt-decode";
import { NextPageContext } from "next";
import redirect from "../helpers/redirect";
import { destroyTheCookie, parseTheCookie } from "../helpers/cookieHandler";
import { AMAHLUBI_ACCESS_TOKEN, AMAHLUBI_REFRESH_TOKEN } from "../constants";
import axios from "axios";
import { endpoint } from "api_routes";

export default function withAuth(gssp) {
  return async (context: NextPageContext) => {
    // parse the cookie and obtain the token
    const token = parseTheCookie(context, AMAHLUBI_ACCESS_TOKEN);
    let refreshToken = parseTheCookie(context, AMAHLUBI_REFRESH_TOKEN);

    // if we don't have a token
    if (!token) {
      if (context.req.url.includes("community")) redirect(context, "/login");
    }

    if (token) {
      // decode the token
      const decoded: any = jwtDecode(token);
      // token expired
      // if (dayjs().unix() > +decoded.exp) {
      //   // parse refresh token
      //   refreshToken = parseTheCookie(context, AMAHLUBI_REFRESH_TOKEN);

      //   //   // clear the cookie if token has expired
      //   //   destroyTheCookie(context, AMAHLUBI_ACCESS_TOKEN);
      //   //   if (context.req.url === "/login" || context.req.url === "/") {
      //   //     return await gssp(context);
      //   // }
      //   //   redirect(context, "/login");
      // }

      //   if authenticated the token
      if (
        context.req.url.includes("login") ||
        context.req.url.includes("create-account")
      ) {
        redirect(context, "/community");
      }

      // if on the response we don't have user query for user
      if (!context.res["user"]) {
        const res = await axios.get(endpoint.ME + decoded.id, {
          headers: {
            Authorization: `Bearer ${token}`,
            "x-refresh-token": refreshToken,
          },
        });

        if (res.status === 200) {
          //   check for user object and add it to the response object as context.res.user
          context.res["user"] = {
            ...res.data?.message?.user,
            token,
            refreshToken,
          };
        }
      }
      // let user: any = parseCookies(context).user;
      // if (user) {
      //   // reach out to nookies and grab the user
      //   user = JSON.parse(user);
      //   const data = { token, user, fqdn: user.email };
      // }
    }

    return await gssp(context);
  };
}
