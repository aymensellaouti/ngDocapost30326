import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class CustomStrategy implements PreloadingStrategy {
  preload(route: Route, preload: () => Observable<any>): Observable<any> {
    console.log({route});
    if(route.data && route.data['preload']) {
      // Si vous voulez preloadez cette route retourner la fonction preload
      return preload();
    }
    //sinon retourner of null
    return of(null);
    //throw new Error("Method not implemented.");
  }
}
