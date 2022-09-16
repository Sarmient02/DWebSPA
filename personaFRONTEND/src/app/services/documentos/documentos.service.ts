import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  private API_SERVER = "http://localhost:8080/documentos/"

  constructor(
    private HttpClient: HttpClient
  ) { }

  public getAllDocumentos() : Observable<any>{
    return this.HttpClient.get(this.API_SERVER);
  }
}
