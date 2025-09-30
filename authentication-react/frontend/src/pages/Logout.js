import { redirect } from 'react-router-dom';
// no specific logout page is needed, just redirect to home
export function action() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    return redirect('/');
}
