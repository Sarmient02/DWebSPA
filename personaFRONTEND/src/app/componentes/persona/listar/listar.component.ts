import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CiudadesService } from '../../../services/ciudades/ciudades.service';
import { DocumentosService } from '../../../services/documentos/documentos.service';
import { PersonasService } from '../../../services/personas/personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {

  personas: any;
  ciudades: any;
  documentos: any;

  constructor(
    public fb: FormBuilder,
    public ciudadesService: CiudadesService,
    public documentosService: DocumentosService,
    public personasService: PersonasService,
    private router: Router
    ){
    
  }

  ngOnInit(): void {


    this.personasService.getAllPersonas().subscribe(resp=>{
      this.personas = resp;
    },
    error=> {console.error}
    );
  }

  eliminar(persona:any){
    this.personasService.deletePersona(persona.id).subscribe(resp=>{
      console.log(resp);
      if(resp===true){
        this.personas.pop(persona)
      }
    })
  }
  
}
