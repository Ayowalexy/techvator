import dayjs from "dayjs";
import jwtDecode from "jwt-decode";
import { NextPageContext } from "next";
import redirect from "helpers/redirect";
import { parseTheCookie } from "../helpers/cookieHandler";

export default function withAuth(gssp) {
  return async (context: NextPageContext) => {
    // parse the cookie and obtain the token
    const token = parseTheCookie(context);

    if (token) {
      // decode the token
      const decoded: any = jwtDecode(token);
      // token expired
      if (dayjs().unix() > +decoded.exp) {
        redirect(context, "/login");
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
