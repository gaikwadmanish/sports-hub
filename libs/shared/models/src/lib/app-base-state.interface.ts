export type AppStateStatus = 'loading' | 'pending' | 'success' | 'error';
export type AppStateError = string | null;
export interface AppStoreBaseState<T> {
  status: AppStateStatus;
  data: T | null;
  error: AppStateError;
}
