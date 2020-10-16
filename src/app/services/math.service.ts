import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  public add(x: number, y: number) {
    return x + y;
  }

  public subtract(x: number, y: number) {
    return x - y;
  }
}
