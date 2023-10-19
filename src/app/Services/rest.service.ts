import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
<<<<<<< HEAD
=======
  }

  public async Post(controller: string,object:any){
    await this.api.post(this.url+controller,object).toPromise().then((res)=>{
      console.log(res);
    });
>>>>>>> 3209f74133ab8e1546a1edc47535e7581801afdb
  }
    public async Put(controller: string,object:any, id:string){
        await this.api.put(this.url+controller+id,object).toPromise().then((res)=>{
          console.log(res);
    });
    }
    public async Delete(controller: string,object:any){
        await this.api.delete(this.url+controller,object).toPromise().then((res)=>{
           console.log(res);
    });
  }
}
