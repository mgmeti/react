import { redirect } from "react-router-dom";

export function getTokenDuration() {
    const expirationDate = localStorage.getItem('expiration');
    const now = new Date();
    const expiration = new Date(expirationDate);
    const duration = expiration.getTime() - now.getTime();
    return duration;
}

export function getToken() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    const tokenDuration = getTokenDuration();

    if (tokenDuration < 0) {
      return 'EXPIRED'
    }
    return token;
}

export function loader() {
  return getToken();
}

export function checkAuthLoader() {
    const token = getToken();
    if (!token) {
       redirect('/auth');
    }
    return null;
}
