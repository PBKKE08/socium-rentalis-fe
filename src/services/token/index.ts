import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export function saveTokenToCookies(token: string) {
  const tokenBase64 = btoa(token);
  // set token to cookie in 1 hour
  Cookies.set("token", tokenBase64, {
    expires: 24 * 3,
  });
}
export function getTokenFromCookies() {
  const tokenBase64: string | undefined = Cookies.get("token");
  if (!tokenBase64) return undefined;
  const token = atob(tokenBase64);
  return token;
}

export function getDataToken() {
  const token = getTokenFromCookies();
  if (!token) return undefined;
  const tokenDecoded = jwtDecode(token);
  return tokenDecoded;
}

export function removeTokenFromCookies() {
  Cookies.remove("token"); // remove token from cookie
}
