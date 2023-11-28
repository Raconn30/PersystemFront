import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public api: HttpClient) { }

  url = "https://localhost:7172/api/";

  public async Get(controller:string){
    var result:any
    await this.api.get(this.url+controller).toPromise().then(x=>{
      result=x;
    })
    return result;
  }
  // public Get(controller:string): Observable<any> {
  //   var result:any
  //   return result= from(this.api.get(this.url+controller).toPromise());
  // }

  public async Post(controller: string, object:any){
    await this.api.post(this.url+controller,object).toPromise().then((res)=>{
      console.log(res);
    });

  }
    public async Put(controller: string ,id:string|number,object:any ){
        await this.api.put(this.url+controller+id,object).toPromise().then((res)=>{
          console.log(res);
    });
    }
    public async Delete(controller: string,id:any){
        await this.api.delete(this.url+controller+id).toPromise().then((res)=>{
           console.log(res);
    });
  }
}
