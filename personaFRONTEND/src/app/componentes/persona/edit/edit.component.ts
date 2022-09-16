import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CiudadesService } from '../../../services/ciudades/ciudades.service';
import { DocumentosService } from '../../../services/documentos/documentos.service';
import { PersonasService } from '../../../services/personas/personas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  personaForm: FormGroup;
  ciudades: any;
  documentos: any;
  persona: any;
  id:any;
  selectedDocumento:any;
  selectedCiudad:any;
  selectedDate:any;

  constructor(
    public fb: FormBuilder,
    public ciudadesService: CiudadesService,
    public documentosService: DocumentosService,
    public personasService: PersonasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ){
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    
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

    this.personasService.getPersonaByID(this.id).subscribe(resp=>{
      this.persona = resp;
      console.log(this.persona);
      this.editar(resp);
    },
      error=>{console.error(error)}
    );
  }

  editar(persona:any){
    this.personaForm.setValue({
      id: persona.id,
      nombre : persona.nombre,
      apellido : persona.apellido,
      documento : persona.documento,
      fechanacimiento : persona.fechanacimiento,
      email : persona.email,
      telefono :persona.telefono,
      username : persona.username,
      password : persona.password,
      tipodocumento : persona.tipodocumento,
      lugarresidencia : persona.lugarresidencia
    });
    this.selectedCiudad=persona.lugarresidencia.id;
    this.selectedDocumento=persona.tipodocumento.id;
    this.selectedDate = persona.fechanacimiento.substring(0,10);
    console.log(this.selectedDate);
  }

  guardar():void{
    this.personasService.savePersona(this.personaForm.value).subscribe(resp=>{
      this.personaForm.reset()
      this.router.navigateByUrl("/persona");
    },
      error=>[console.error(error), alert("Debe llenar todos los campos.")]
    )
    
  };

  cancelar():void{
    this.router.navigateByUrl("/persona");
  };

}
