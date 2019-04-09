import { Component, OnInit } from '@angular/core';
// import { DesignerdataService} from '.designerdata.service';
import {DesignerdataService } from '../designerdata.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  constructor(private designerdataService: DesignerdataService,
  public router: Router, public activatedRoute: ActivatedRoute) { }

    // state$: Observable<any>;
   details: any[];
  ngOnInit() {
     // this.getList();
    //  this.state$ = this.router.events.pipe(
    //   filter(e => e instanceof NavigationStart),
    //   map(() => {
    //     const currentNav = this.router.getCurrentNavigation();
    //     return currentNav.extras.state;
    //   })
    // );
    this.getdata();
    // this.designerdataService.getconsole();

  }


  // getList(): void {
  //         this.designerdataService.getList()
  //          .subscribe(details => this.details = details);
  //  }


    getdata(): void{
        this.designerdataService.getList().then(data =>{
        // console.log(data);
        this.details = data;
        // console.log(this.designerList);
        // return this.designerList;
        })
    }

  //  go() {
  //   this.router.navigateByUrl('/detail/:id', { state: { hello: 'details' } });
  // }

}
