// tslint:disable:array-type
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

export abstract class StoreService<T extends BaseState> {
  initialState: T;
  state$: Observable<T>;
  // tslint:disable-next-line:variable-name
  private _state$: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this.initialState = initialState;
    this._state$ = new BehaviorSubject<T>(initialState);
    this.state$ = this._state$.asObservable();
  }

  get state(): T {
    return this._state$.getValue();
  }

  select<K extends StateProps<T>>(key: K): Observable<T[K]>;
  select<K extends StateProps<T>, P extends keyof T[K]>(key: K, nested: P): Observable<T[K][P]>;
  select(...keys) {
    return this._state$.pipe(pluck(...keys));
  }

  getStateValueAtProp<K extends keyof T>(name: K): T[K] {
    return this.state[name];
  }

  setState(nextState: T): void {
    this._state$.next(nextState);
  }

  changeState<K extends keyof T>(key: K, value: T[K]): void {
    this._state$.next({
      ...(this.state as any),
      [key]: value
    });
  }

  resetState(): void {
    this._state$.next(this.initialState);
  }
}

type StateProps<T> = Extract<(keyof T), string>;

export interface BaseState {
  loading?: boolean;
  error?: any;
  /** This is for stores that doesn't implements the EntityState interface */
  [key: string]: any;
}
