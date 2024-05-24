import { atom } from 'jotai';
import Cookies from 'js-cookie';

const token = Cookies.get('token');

export const userAtom = atom(token ? { isLoggedIn: true, token } : { isLoggedIn: false });
