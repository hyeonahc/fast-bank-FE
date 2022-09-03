import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import NavBar from '@/components/NavBar';

import { useAppDispatch } from '@/modules/hooks';
import { saveName } from '@/modules/user';

import { pagesFullPath } from '@/pages/pagesPath';
import { actIsAuthError } from '@/utils/isAuthError';

interface Props {}

const RequireAuth = (props: Props) => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        navigate(pagesFullPath.signin);
        return;
      }

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/auth`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        dispatch(saveName(res.data.memberProfile.name));
      } catch (e) {
        actIsAuthError(e, navigate);
      }
    })();
  }, [location.pathname]);

  if (!localStorage.getItem('accessToken')) return null;
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
};

export default RequireAuth;
