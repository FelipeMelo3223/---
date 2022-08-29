import { Injectable } from '@angular/core';
import { Contato } from '../class/contato';


@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  private _contatos : Contato[] = []
  
  constructor() { 

  }

  inserir(contato : Contato) : void{
    this._contatos.push(contato)
  }

  get contatos(): Contato[]{
    return this._contatos
  }
  set contatos(contatos : Contato[]){
    this._contatos = contatos
  }
}
