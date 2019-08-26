import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private ds:HttpClient) {
   }
   public getdata(){
     let url="http://localhost:8000/data"
    return this.ds.get(url)
   }
}
