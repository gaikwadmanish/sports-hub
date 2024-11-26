import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APP_CONFIG } from '@sports-hub/f1-racing/shared-config';
import { SeasonsApiResponse } from '@sports-hub/f1-racing/shared-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeasonsApiService {
  private readonly appConfig = inject(APP_CONFIG);
  private readonly httpClient = inject(HttpClient);

  /**
   * This method is used to get list of all seasons from api.
   * @returns
   */
  getAllSeasons(): Observable<SeasonsApiResponse> {
    return this.httpClient.get<SeasonsApiResponse>(
      `${this.appConfig.apiBaseUrl}seasons?format=json&limit=100`,
    );
  }
}
