import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Array<Editora> = [
    { codEditora: 1,
      nome: "Hyperion Kids"
  },{
      codEditora: 2,
      nome: "Intrínseca"
  },{
      codEditora: 3,
      nome: "Rocco Jovens Leitores"
  }];
  
  constructor() { }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter(e => e.codEditora === codEditora)[0];
    return editora ? editora.nome : '';
  }
}
