import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  private API_SERVER = "http://localhost:8080/ciudad/"

  constructor(
    private HttpClient: HttpClient
  ) { }

  public getAllCiudades() : Observable<any>{
    return this.HttpClient.get(this.API_SERVER);
  }
}
