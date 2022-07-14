import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { carrera } from './carrera';
import { carreraService } from './carrera.service';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html'
})
export class CarreraComponent implements OnInit {

  constructor(
    private carreraService: carreraService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: carrera = 
  {
          id: 0,
          nombre: "",
          tipoCarrera: "",
          updated: new Date(),
          deleted:new Date(),
          archived:true,
          enabled: true
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save():void {
    console.table(this.currentEntity);
    this.carreraService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity = 
        {
          id: 0,
          nombre: "",
          tipoCarrera: "",
          updated: new Date(),
          deleted:new Date(),
          archived:true,
          enabled: true
        };
      }
    )
  }

  findById(id: number):void {
    this.carreraService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.carreraService.deleteById(this.currentEntity.id).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

}
