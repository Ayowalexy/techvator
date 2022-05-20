const api_url = process.env.NEXT_PUBLIC_API_URL;

export const endpoint = {
  REGISTER: api_url + "user/register",
  LOGIN: api_url + "user/login",
  ME: api_url + "user/",
};
