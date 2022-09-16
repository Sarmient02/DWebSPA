import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private API_SERVER = "http://localhost:8080/personas/";

  constructor(
    private HttpClient: HttpClient
  ) { }

  public getAllPersonas(): Observable<any>{
    return this.HttpClient.get(this.API_SERVER);
  }

  public getPersonaByID(id:any): Observable<any>{
    return this.HttpClient.get(this.API_SERVER+id);
  }

  public savePersona(persona:any): Observable<any>{
    return this.HttpClient.post(this.API_SERVER, persona);
  }

  public deletePersona(id:any):Observable<any>{
    return this.HttpClient.delete(this.API_SERVER + "delete/" + id);
  }

  public editPersona(persona:any):Observable<any>{
    return this.HttpClient.put(this.API_SERVER + "edit/" + persona.id, persona);
  }

}
