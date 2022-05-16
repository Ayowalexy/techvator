import dayjs from "dayjs";
import jwtDecode from "jwt-decode";
import { NextPageContext } from "next";
import redirect from "../helpers/redirect";
import { destroyTheCookie, parseTheCookie } from "../helpers/cookieHandler";
import { AMAHLUBI_ACCESS_TOKEN } from "../constants";

export default function withAuth(gssp) {
  return async (context: NextPageContext) => {
    // parse the cookie and obtain the token
    const token = parseTheCookie(context);

    if (token) {
      // decode the token
      const decoded: any = jwtDecode(token);
      // token expired
      if (dayjs().unix() > +decoded.exp) {
        console.log("Expired");
        // clear the cookie if token has expired
        destroyTheCookie(context, AMAHLUBI_ACCESS_TOKEN);
        if (context.req.url === "/login" || context.req.url === "/") {
          return await gssp(context);
        }

        redirect(context, "/login");
      }

      //   if authenticated the token
      if (
        context.req.url.includes("login") ||
        context.req.url.includes("create-account")
      ) {
        redirect(context, "/community");
      }

      //   check for user object and add it to the response object as context.res.user
      context.res["user"] = decoded;
      //   let user: any = parseCookies(context).user;
      //   if (user) {
      //     // reach out to nookies and grab the user
      //     user = JSON.parse(user);
      //     const data = { token, user, fqdn: user.email };
      //   }
    }

    return await gssp(context);
  };
}
