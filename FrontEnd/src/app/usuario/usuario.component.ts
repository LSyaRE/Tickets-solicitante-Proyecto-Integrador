import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Usuario = {
    id: 0,
    nombre: "",
    correo:"",
    password:"",
    enabled: true
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params)=>{
        if(params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save(): void{
    this.usuarioService.save(this.currentEntity)
    .subscribe(
      ()=>{
        this.currentEntity = {
          id: 0,
          nombre: "",
          correo:"",
          password:"",
          enabled: true
        };
      }
    )
  }

  findById(id: number): void{
    this.usuarioService.findById(id).subscribe(
      (response)=>{
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    console.log("Borrando..");
    this.usuarioService.deleteById(this.currentEntity.id).subscribe(
      ()=>{
        console.log("borrado");
        this.currentEntity = {
          id: 0,
          nombre: "",
          correo:"",
          password:"",
          enabled: true
        };
      }
    )
  }

}
