import { curry } from 'ramda';
// TODO: Strings could be replaced by Symbols,
//       when we build all application with babel.

export const TRANSPILE_ERROR = 'TRANSPILE_ERROR';
export const PORT_NOT_FOUND = 'PORT_NOT_FOUND';
export const IDE_NOT_FOUND = 'IDE_NOT_FOUND';
export const UPLOAD_ERROR = 'UPLOAD_ERROR';
export const INDEX_LIST_ERROR = 'INDEX_LIST_ERROR';
export const INSTALL_PAV_ERROR = 'INSTALL_PAV_ERROR';
export const NO_INSTALLED_PAVS = 'NO_INSTALLED_PAVS';

export const INVALID_WORKSPACE_PATH = 'INVALID_WORKSPACE_PATH';

// :: ERROR_CODE -> Error -> Promise.Reject Error
export default curry(
  (code, err) => Promise.reject(Object.assign(err, { errorCode: code }))
);
