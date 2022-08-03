import { Component, OnInit } from '@angular/core';
import { RespuestaService } from '../respuesta.service';
import { Respuesta } from '../respuesta';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  
})
export class FormComponent implements OnInit {

  constructor( private respuestaService: RespuestaService,
    private activatedRoute: ActivatedRoute) { }

    currentEntity: Respuesta = 
    {
      id: 0,
      comentario: "",
      created: new Date(),
      enabled: true,
      resuelto: false,
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
    this.respuestaService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity = 
        {
        id: 0,
        comentario: "",
        created: new Date(),
        enabled: true,
        resuelto: false,
        };
      }
    )
  }

  findById(id: number):void {
    this.respuestaService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.respuestaService.deleteById(this.currentEntity.id).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

}