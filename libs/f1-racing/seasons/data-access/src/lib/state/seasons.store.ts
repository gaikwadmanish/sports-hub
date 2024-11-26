import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

import { inject } from '@angular/core';
import { Season } from '@sports-hub/f1-racing/shared-models';
import { AppStoreBaseState } from '@sports-hub/shared-models';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import { SeasonsApiService } from '../api/seasons-api.service';

export type SeasonsState = AppStoreBaseState<Season[]>;

const initialState: SeasonsState = {
  data: [],
  status: 'pending',
};

export const SeasonsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, seasonsApiService = inject(SeasonsApiService)) => ({
    loadAll: rxMethod<void>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, { status: 'loading' })),
        switchMap(() => {
          return seasonsApiService.getAllSeasons().pipe(
            tapResponse({
              next: (seasonsResponse) => {
                if (seasonsResponse?.MRData?.SeasonTable?.Seasons) {
                  patchState(store, {
                    data: seasonsResponse.MRData.SeasonTable.Seasons,
                    status: 'success',
                  });
                } else {
                  patchState(store, { data: [], status: 'success' });
                }
              },
              error: (err: Error) => {
                patchState(store, {
                  status: 'error',
                  error: err?.message ?? '',
                });
              },
            }),
          );
        }),
      ),
    ),
  })),
);
