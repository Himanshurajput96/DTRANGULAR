import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DesignerdataService {

    constructor(
        private http: HttpClient,

    ) { }

    designerList: any[];

    // getList(): Observable<any[]>{
    //     let designerlist =  this.http.get<any[]>('https://dev.datetheramp.com/api/app/catalog/designers/?page=1&page_size=60')
    //     return designerlist;
    // }
    // url: string;
    url='https://dev.datetheramp.com/api/app/catalog/designers/'

    getList(): any[] {
        // {this.getList()
        //     .subscribe(details => {this.designerList = details;
        //     console.log(this.designerList);
        //     });
        // console.log(this.designerList);
        // }
        // return this.designerList;

        return new Promise(resolve => {
               this.http.get('https://dev.datetheramp.com/api/app/catalog/designers/?page=1&page_size=60')
                 .subscribe(data => {
                   this.designerList = data;
                   resolve(this.designerList);
                 });
             });
}




    // getdata() : any[] {
        // this.getList().then(data =>{
            // console.log(data);
            // this.designerList =data;
            // console.log(this.designerList);
            // return this.designerList;
//do here what you want
            // })
    // }


    getconsole(): void{
        console.log(this.designerList[0]);
    }


    getobj(id:number): any[]{
        // console.log(this.designerList)
     if(this.designerList)
      {
        for(let i=0;i<this.designerList.length;i++)
            {
                if(this.designerList[i].id==id)
                {
                    return this.designerList[i];
                }
            }
      }
      else
       {return null;}
    }


}





    // getPartners() {
      //   return new Promise(resolve => {
      //     this.http.get('http://www.cinemairis.it/wp-json/wp/v2/partners')
      //       .map(results => results.json())
      //       .subscribe(data => {
      //         this.itemspartners = data;
      //         resolve(this.itemspartners);
      //       });
      //   });
      //
      // openPartners(item) {
      //   this.getPartners().then(data => {
      //     console.log(data);
      //   })
    //   }



    // getdesc(id: number): Observable<any>{
    //
    //
    // }
    // getdata(id)
