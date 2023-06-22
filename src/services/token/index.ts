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
  // console.log(token);
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

export function getTokenFromCookiesServer(tokenFromServer: string) {
  if (!tokenFromServer) return undefined;
  const token = Buffer.from(tokenFromServer, "base64").toString("ascii");
  if (!token) return undefined;
  return token;
}

export function getTokenFromCookiesAndDecodeForServer(tokenFromServer: string) {
  const token = getTokenFromCookiesServer(tokenFromServer);
  if (!token) return undefined;
  const payload = jwtDecode(token);
  return payload;
}

// ADMIN
export function saveTokenAdminToCookies(token: string) {
  const tokenBase64 = btoa(token);
  // set token to cookie in 1 hour
  Cookies.set("tokenAdmin", tokenBase64, {
    expires: 24 * 3,
  });
}
export function getTokenAdminFromCookies() {
  const tokenBase64: string | undefined = Cookies.get("tokenAdmin");
  if (!tokenBase64) return undefined;
  const token = atob(tokenBase64);
  // console.log(token);
  return token;
}

export function getDataTokenAdmin() {
  const token = getTokenAdminFromCookies();
  if (!token) return undefined;
  const tokenDecoded = jwtDecode(token);
  return tokenDecoded;
}

export function removeTokenAdminFromCookies() {
  Cookies.remove("tokenAdmin"); // remove token from cookie
}

// PARTNER
export function saveTokenPartnerToCookies(token: string) {
  const tokenBase64 = btoa(token);
  // set token to cookie in 1 hour
  Cookies.set("tokenPartner", tokenBase64, {
    expires: 24 * 3,
  });
}
export function getTokenPartnerFromCookies() {
  const tokenBase64: string | undefined = Cookies.get("tokenPartner");
  if (!tokenBase64) return undefined;
  const token = atob(tokenBase64);
  // console.log(token);
  return token;
}

export function getDataPartnerToken() {
  const token = getTokenPartnerFromCookies();
  if (!token) return undefined;
  const tokenDecoded = jwtDecode(token);
  return tokenDecoded;
}

export function removeTokenPartnerFromCookies() {
  Cookies.remove("tokenPartner"); // remove token from cookie
}

export function getTokenPartnerFromCookiesServer(tokenFromServer: string) {
  if (!tokenFromServer) return undefined;
  const token = Buffer.from(tokenFromServer, "base64").toString("ascii");
  if (!token) return undefined;
  return token;
}

export function getTokenPartnerFromCookiesAndDecodeForServer(
  tokenFromServer: string
) {
  const token = getTokenPartnerFromCookiesServer(tokenFromServer);
  if (!token) return undefined;
  const payload = jwtDecode(token);
  return payload;
}
