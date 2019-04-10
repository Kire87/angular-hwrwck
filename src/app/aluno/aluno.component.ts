import { Component, OnInit } from '@angular/core';

  

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }

  enviar(){
    alert(this.fundo);
  }
  alunos = ["eeeeee", "aaaaaaaaa", "bbbbbbbbbb", "zap"];
  fundo = "";

}