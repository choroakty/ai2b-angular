import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  randomNumber(max: number): number {
    const num = Math.floor(Math.random() * max) + 1;
    return num;
  }
}
