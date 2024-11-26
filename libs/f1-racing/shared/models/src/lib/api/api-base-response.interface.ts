export interface ApiResponseRoot<T> {
  MRData: MRData & T;
}
export interface MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
}
