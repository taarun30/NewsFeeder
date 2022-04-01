import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private _http:HttpClient) { }

  ApiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=d0c097a4408344abbd064d8304b9399a";

  topnews():Observable<any>
  {
    return this._http.get(this.ApiUrl);
  }






}
