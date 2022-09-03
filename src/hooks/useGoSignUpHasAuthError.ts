import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

import { actIsAuthError } from '@/utils/isAuthError';

const useGoSignUpHasAuthError = (
  errors: (FetchBaseQueryError | SerializedError | undefined)[],
) => {
  const navigate = useNavigate();
  useEffect(() => {
    for (const error of errors) {
      actIsAuthError(error, navigate);
    }
  }, [errors]);
};

export default useGoSignUpHasAuthError;
