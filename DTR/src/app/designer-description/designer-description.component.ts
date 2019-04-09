import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Location } from '@angular/common';
import {DesignerdataService } from '../designerdata.service';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-designer-description',
  templateUrl: './designer-description.component.html',
  // template:'<pre>{{detail |async |json}}',
  styleUrls: ['./designer-description.component.css']
})


export class DesignerDescriptionComponent implements OnInit {
 // state$: Observable<object>;
 // detail: integer;
 detai: any[];
 detailid: any;
 details: any[];

// private state$: Observable<object>;

  constructor(
      public designerdataService: DesignerdataService,
      private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location

) { }

  ngOnInit() {
    // this.detail = this.activatedRoute.paramMap.pipe(
    //   map(() => window.history.state)
    //    )
// let a=[];
// a= this.detail |this. async | this.json;
//     a = +this.activatedRoute.params.paramMap.get('obj');
//       console.log(a);
 // getid(): void{

   this.getid();

   // this.designerdataService.getconsole();
   // this.refreshid();
}

//
// getdata():void{
//     // console.log(this.detailid);
//     this.designerdataService.getList().then(data =>{
//     // console.log(data);
//     this.details =data;
//     })
// }


 getid(): void{

    this.detailid = +this.activatedRoute.snapshot.paramMap.get('id');

    // console.log(this.detailid);
    if(this.designerdataService.getobj(this.detailid))
        {
            this.detai = this.designerdataService.getobj(this.detailid);

        }
    else
        {
            // console.log(this.detailid);
            this.designerdataService.getList().then( data =>{
            // console.log(data);
            this.details =data;

            for(let i=0;i<this.details.length;i++)
                {
                    if(this.details[i].id==this.detailid)
                    {
                        this.detai = this.details[i];
                    }
                }
            })




              // console.log(this.detailid);
              // this.designerdataService.getList().then(data =>{
              // console.log(data);
              // this.details =data;
              // });
              // console.log(this.designerList);
              // return this.designerList;



        }

     // .subscribe(details => this.details = details);


    }
    // for(let i=0;i<this.details.length;i++)
    //     {
    //         if(this.details[i].id==id)
    //         {
    //             this.detai = this.details[i];
    //         }
    //     }



  // for(i=0; this.detail==)







}
