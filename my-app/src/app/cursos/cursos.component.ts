import { Component } from '@angular/core';
import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  nomePortal: string;

  cursos: string[] = [];

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'https://sersasj.training/';
    this.cursos = this.cursosService.getCursos();
    /*
    for (let i=0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
    }
    */
  }
}