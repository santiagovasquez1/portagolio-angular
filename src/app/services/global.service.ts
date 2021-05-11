import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  url="localhost:3700/api/";
  constructor() { }
}
