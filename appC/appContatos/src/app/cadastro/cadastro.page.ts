import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from '../class/contato';
import { ContatosService } from '../services/contatos.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  nome : string
  telefone : number
  genero : string
  dataNascimento : string
  constructor(private alertController: AlertController, private router : Router, 
    private contatoService : ContatosService) { 
    
  }

  ngOnInit() {
  }

  cadastrar() : void {
    if ((this.validar(this.nome)) && (this.validar(this.telefone) && (this.validar(this.genero) && (this.validar(this.dataNascimento))))) {
      let contato : Contato = new Contato(this.nome, this.telefone, this.genero, this.dataNascimento)
      this.contatoService.inserir(contato)
      this.router.navigate(["/home"])
    }else{
      this.presentAlert("Agenda", "Cadastro", "Todos os Campos são Obrigatórios!")
    }
  }
  
  private validar(campo : any) : boolean{
    if(!campo){
      return false
    }else{
      return true
    }
  }

  async presentAlert(titulo : string, subtitulo : string, msg : string) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: subtitulo,
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
