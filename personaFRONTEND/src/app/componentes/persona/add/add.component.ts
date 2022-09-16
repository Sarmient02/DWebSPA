import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CiudadesService } from '../../../services/ciudades/ciudades.service';
import { DocumentosService } from '../../../services/documentos/documentos.service';
import { PersonasService } from '../../../services/personas/personas.service';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  personaForm: FormGroup;
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

    this.personaForm = this.fb.group({
      id:[''],
      nombre : ['', Validators.required],
      apellido : ['', Validators.required],
      documento : ['', Validators.required],
      fechanacimiento : ['', Validators.required],
      email : ['', Validators.email],
      telefono : ['', Validators.required],
      username : ['', Validators.required],
      password : ['', Validators.required],
      tipodocumento : ['', Validators.required],
      lugarresidencia : ['', Validators.required]
    });
    
    this.ciudadesService.getAllCiudades().subscribe(resp=>{
      this.ciudades = resp;
    }, 
      error=>{console.error(error)}
    );

    this.documentosService.getAllDocumentos().subscribe(resp=>{
      this.documentos = resp;
    }, 
      error=>{console.error(error)}
    );
  }
  guardar():void{
    this.personasService.savePersona(this.personaForm.value).subscribe(resp=>{
      this.personaForm.reset()
      /*setTimeout(() => {
        setTimeout(() => {
          this.router.navigateByUrl("/persona");
        });
      }, 3400);*/
    },
      error=>[console.error(error), alert("Debe llenar todos los campos.")]
    )
    
  };

  cancelar():void{
    this.router.navigateByUrl("/persona");
  };

}
