import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { NavigateFunction } from 'react-router/lib/hooks';
import { SerializedError } from '@reduxjs/toolkit';
import axios from 'axios';

import { pagesFullPath } from '@/pages/pagesPath';

export function isAuthErrorRTKQuery(
  qryError: FetchBaseQueryError | SerializedError | undefined,
) {
  if (qryError && 'status' in qryError) {
    if (typeof qryError.status === 'number' && qryError.status === 401) {
      return true;
    }
  }
  return false;
}

export function isAuthErrorAxios(axiosError: unknown) {
  if (!axiosError || !axios.isAxiosError(axiosError)) {
    return false;
  }

  const { response } = axiosError;

  let status = -1;
  if (response) {
    status = response.status;
  }

  return status === 401;
}

export function actIsAuthError(error: unknown, navigate: NavigateFunction) {
  if (!error) return false;

  const isAuthError =
    isAuthErrorAxios(error) ||
    isAuthErrorRTKQuery(error as FetchBaseQueryError);

  if (isAuthError) {
    navigate(pagesFullPath.signin);
  }

  return isAuthError;
}
