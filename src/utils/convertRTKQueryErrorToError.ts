import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

export function convertRTKQueryErrorToError(
  qryError: FetchBaseQueryError | SerializedError | undefined,
): Error | undefined {
  if (qryError) {
    if ('status' in qryError) {
      switch (qryError.status) {
        case 'FETCH_ERROR':
          return new Error(qryError.error);
        case 'PARSING_ERROR':
          return new Error(qryError.error);
        case 'CUSTOM_ERROR':
          return (
            (qryError.data as Error | undefined) ?? new Error(qryError.error)
          );
        default:
          return qryError.data as Error;
      }
    } else {
      const error = new Error(
        qryError.message
          ? `${qryError.message}${qryError.code ? ': ' + qryError.code : ''}`
          : 'RTK Query 에러',
      );
      qryError.name && (error.name = qryError.name);
      return error;
    }
  }

  return undefined;
}
