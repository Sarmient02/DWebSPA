import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CiudadesService } from './services/ciudades/ciudades.service';
import { DocumentosService } from './services/documentos/documentos.service';
import { PersonasService } from './services/personas/personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  personaForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public ciudadesService: CiudadesService,
    public documentosService: DocumentosService,
    public personasService: PersonasService,
    ){
    
  }
  ngOnInit(): void {
    
    this.personaForm = this.fb.group({
      nombre : ['', Validators.required],
      apellido : ['', Validators.required],
      documento : ['', Validators.required],
      fechanacimiento : ['', Validators.required],
      email : ['', Validators.required],
      telefono : ['', Validators.required],
      username : ['', Validators.required],
      password : ['', Validators.required],
      tipoDocumento : ['', Validators.required],
      lugarResidencia : ['', Validators.required],
    })
    
  }

  guardar():void{
    this.personasService.savePersona(this.personaForm.value).subscribe(resp=>{

    },
      error=>{console.error(error)}
    )
  }

}
