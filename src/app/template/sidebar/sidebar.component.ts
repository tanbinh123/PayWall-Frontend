import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuarioLogado: string;
  permissaoUsuario: boolean;
  permissaoAssistente: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    this.permissaoUsuario = false;
    this.permissaoAssistenteTeste();
    console.log(this.permissaoAssistente);
    this.authService
      .permissaoUsuariosMenu()
      .subscribe(response => {
        this.permissaoUsuario = true;
      });
  }

  permissaoAssistenteTeste(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    this.permissaoAssistente = false;
    this.authService
      .permissaoUsuarioAssistente()
      .subscribe(response => {
        this.permissaoAssistente = true;
      })
  }


}
