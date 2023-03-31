import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { Observable, timer, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadStrategyService {

  constructor() { }

  preload(route: Route, fn: () => import("rxjs").Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      console.log("Preload path:" + route.path);
      return fn();
    }else{
      return of(null);
    }
  }
}
