import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
}
