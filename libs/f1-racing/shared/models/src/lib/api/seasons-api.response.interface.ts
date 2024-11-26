import { Season } from '../season.interface';
import { ApiResponseRoot } from './api-base-response.interface';

export interface SeasonApiObject {
  SeasonTable: {
    Seasons: Season[];
  };
}

export type SeasonsApiResponse = ApiResponseRoot<SeasonApiObject>;
