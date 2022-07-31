import cookie from "js-cookie";

export const setCookie = (key,value)=>{
    if(typeof window !== 'undefined'){
        cookie.set(key,value, {
            expires: 1,
            path: '/'
        })
    }
}

const getCookieFromServer = (key, req) => {
    if (!req.headers.cookie) {
      return undefined;
    }
    const rawCookie = req.headers.cookie
      .split(';')
      .find(c => c.trim().startsWith(`${key}=`));
    if (!rawCookie) {
      return undefined;
    }
    return rawCookie.split('=')[1];
  };