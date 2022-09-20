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

  reverse:any;

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

  sortID(){
    if(!this.reverse){
      this.personas = this.personas.sort((a:any,b:any)=> b.id - a.id)
      this.reverse = !this.reverse;
    } else {
      this.personas = this.personas.sort((a:any,b:any)=> a.id - b.id)
      this.reverse = !this.reverse;
    }
  }

  sortName(){
    if(!this.reverse){
      this.personas = this.personas.sort((a:any,b:any)=> a.nombre.localeCompare(b.nombre))
      this.reverse = !this.reverse;
    } else {
      this.personas = this.personas.sort((a:any,b:any)=> b.nombre.localeCompare(a.nombre))
      this.reverse = !this.reverse;
    }
  }

  sortTipoDocumento(){
    if(!this.reverse){
      this.personas = this.personas.sort((a:any,b:any)=> a.tipodocumento.nombre.localeCompare(b.tipodocumento.nombre))
      this.reverse = !this.reverse;
    } else {
      this.personas = this.personas.sort((a:any,b:any)=> b.tipodocumento.nombre.localeCompare(a.tipodocumento.nombre))
      this.reverse = !this.reverse;
    }
  }

  sortDocumento(){
    if(!this.reverse){
      this.personas = this.personas.sort((a:any,b:any)=> b.documento - a.documento)
      this.reverse = !this.reverse;
    } else {
      this.personas = this.personas.sort((a:any,b:any)=> a.documento - b.documento)
      this.reverse = !this.reverse;
      console.log(this.personas);
    }
  }

  sortLugarResidencia(){
    if(!this.reverse){
      this.personas = this.personas.sort((a:any,b:any)=> a.lugarresidencia.nombre.localeCompare(b.lugarresidencia.nombre))
      this.reverse = !this.reverse;
    } else {
      this.personas = this.personas.sort((a:any,b:any)=> b.lugarresidencia.nombre.localeCompare(a.lugarresidencia.nombre))
      this.reverse = !this.reverse;
    }
  }

  sortEmail(){
    if(!this.reverse){
      this.personas = this.personas.sort((a:any,b:any)=> a.email.localeCompare(b.email))
      this.reverse = !this.reverse;
    } else {
      this.personas = this.personas.sort((a:any,b:any)=> b.email.localeCompare(a.email))
      this.reverse = !this.reverse;
    }
  }

  sortTelefono(){
    if(!this.reverse){
      this.personas = this.personas.sort((a:any,b:any)=> b.telefono - a.telefono)
      this.reverse = !this.reverse;
    } else {
      this.personas = this.personas.sort((a:any,b:any)=> a.telefono - b.telefono)
      this.reverse = !this.reverse;
    }
  }

  sortUsuario(){
    if(!this.reverse){
      this.personas = this.personas.sort((a:any,b:any)=> a.username.localeCompare(b.username))
      this.reverse = !this.reverse;
    } else {
      this.personas = this.personas.sort((a:any,b:any)=> b.username.localeCompare(a.username))
      this.reverse = !this.reverse;
    }
  }
  
}
