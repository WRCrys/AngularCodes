import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return ['C#', 'Angular', 'ReactJS', 'React Native', 'Flutter', 'Java']
  }
}
