import Cookies from 'js-cookie';

export const checkAuth = () => {
  const token = Cookies.get('token');
  return !!token; // Renvoie true si le token existe, sinon false
};
