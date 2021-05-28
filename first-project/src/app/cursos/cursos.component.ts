import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  constructor(private cursoService: CursosService) {
    this.nomePortal = 'http://github.com/WRCrys';
    // this.cursos = ['C#', 'Angular', 'ReactJS', 'React Native'];

    // var servico = new CursosService();

    this.cursos = this.cursoService.getCursos();

   }

  ngOnInit(): void {
  }

}
