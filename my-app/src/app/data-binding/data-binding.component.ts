import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  url: string = 'http://loiane.com';
  urlImagem: string = 'http://lorempixel.com.br/500/400/narture';
  cursoAngular : boolean = true;
  valorAtual: string = '';
  valor: string = '';
  nome: string = 'Digite um nome';
  valorSalvo: string = '';
  valorInicial = 15;
  isMouseOver: boolean = false;
  valorInput: string = 'adwdawd';
  nomeDoCurso: string = 'Angular';

  pessoa: any = {
    nome: 'Sergio',
    idade: 21
  }
  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }
}
