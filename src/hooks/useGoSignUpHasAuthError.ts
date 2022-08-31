import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

import { pagesFullPath } from '@/pages/pagesPath';

const useGoSignUpHasAuthError = (
  errors: (FetchBaseQueryError | SerializedError | undefined)[],
) => {
  const navigate = useNavigate();
  useEffect(() => {
    for (const error of errors) {
      if (error && 'status' in error) {
        if (typeof error.status === 'number' && error.status === 401) {
          navigate(pagesFullPath.signin, { replace: true });
        }
      }
    }
  }, [errors]);
};

export default useGoSignUpHasAuthError;
