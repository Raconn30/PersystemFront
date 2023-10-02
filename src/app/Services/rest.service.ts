import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public api: HttpClient) { }

  url = "https://localhost:7241/api/";

  public async Get(controller:string){
    await this.api.get(this.url+controller).toPromise().then((res)=>{
      console.log(res);
    });
  }

  public async Post(controller:string, object:any){
    await this.api.post(this.url+controller, object).toPromise().then((res)=>{
      console.log(res);
    });
  }

  public async Put(controller:string, object:any){
    await this.api.put(this.url+controller, object).toPromise().then((res)=>{
      console.log(res);
    });
  }

  public async Delete(controller:string, object:any){
    await this.api.delete(this.url+controller, object).toPromise().then((res)=>{
      console.log(res);
    });
  }
}
