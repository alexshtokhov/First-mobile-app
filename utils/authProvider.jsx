import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { auth, getWallets } from '../store/auth';
import { useTelegram } from "../hooks/useTelegram";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const access = localStorage.getItem('accessToken')
  const { userTG } = useTelegram(); // Получаем userTG из хука

  console.log('AuthProvider', access)
  // Основная логика для авторизации и получения кошельков
  useEffect(() => {
    if (access) {
      dispatch(getWallets()).unwrap().catch((error) => {
        if (error.message === 'Unauthorized. Please log in again.') {
          // Удаляем токены только при ошибке 401
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        }
      });
    } else if (userTG) {
      dispatch(auth(userTG)).unwrap()
        .then(() => {
          // После успешной авторизации запрашиваем кошельки
          dispatch(getWallets());
        })
        .catch((error) => {
          // Обрабатываем ошибки авторизации, если они возникли
          console.error('Authorization failed:', error);
        });
    }
  }, [access]);

  return children; // Возвращаем детей компонента
};

export default AuthProvider;


