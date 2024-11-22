export const getTokenFromCookies = () => {
  const name = `token=`;
  const decodeCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodeCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return null;
};
