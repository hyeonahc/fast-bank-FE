import { useEffect, useMemo, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import NavBar from '@/components/NavBar';
import useGoSignUpHasAuthError from '@/hooks/useGoSignUpHasAuthError';
import { pagesFullPath } from '@/pages/pagesPath';
import axios from 'axios';

interface Props {}

const RequireAuth = (props: Props) => {
  // const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      navigate(pagesFullPath.signin, { replace: true });
      return;
    }

    /*
    if (isLoading) return;

    (async function () {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        navigate(pagesFullPath.signin);
        return;
      }

      setIsLoading(true);
      // FIXME 임시!!!!!!!!!!!
      try {
        const res = await axios.post(
          'http://localhost:8000/auth',
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        //TODO user redux 업데이트
      } catch (e) {
        navigate(pagesFullPath.signin);
      } finally {
        setIsLoading(false);
      }
    })();
    */
  }, [location.pathname]);

  if (!localStorage.getItem('accessToken')) return null;
  return (
    <>
      {/*{isLoading ? <div>인증 중</div> : <Outlet />}*/}
      <Outlet />
      <NavBar />
    </>
  );
};

export default RequireAuth;
