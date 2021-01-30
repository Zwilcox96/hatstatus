import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { environment } from './../environments/environment';

export interface ServerStatusResponse {
  online: boolean;
  ip: string;
  port: number;
  debug: Debug;
  motd: MotdOrInfo;
  players: Players;
  version: string;
  protocol: number;
  hostname: string;
  icon?: string;
  software?: string;
  map: string;
  plugins: PluginsOrMods;
  mods: PluginsOrMods;
  info: MotdOrInfo;
}

export interface Debug {
  ping: boolean;
  query: boolean;
  srv: boolean;
  querymismatch: boolean;
  ipinsrv: boolean;
  cnameinsrv: boolean;
  animatedmotd: boolean;
  cachetime: number;
}

export interface MotdOrInfo {
  raw: string[];
  clean: string[];
  html: string[];
}

export interface Players {
  online: number;
  max: number;
  list?: string[];
  uuid?: Map<string, string>;
}

export interface PluginsOrMods {
  names: string[];
  raw: string[];
}

@Injectable({
  providedIn: 'root'
})

export class ServerStatusService {

  constructor(private http: HttpClient) {

  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getServerStatus(): Observable<ServerStatusResponse> {
    return this.http.get<ServerStatusResponse>(`https://api.mcsrvstat.us/2/${environment.serverUrl}`).pipe(
      tap(_ => console.log(`grabbed server info`)),
      catchError(this.handleError<ServerStatusResponse>(``))
    );
  }
}
