import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export function getTokenFromCookies() {
  const tokenBase64: string | undefined = Cookies.get("token");
  if (!tokenBase64) return undefined;
  const token = atob(tokenBase64);
  return token;
}

export function getToken() {
  const token = getTokenFromCookies();
  if (!token) return undefined;
  const tokenDecoded = jwtDecode(token);
  return tokenDecoded;
}
