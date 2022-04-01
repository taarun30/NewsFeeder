import { Component, OnInit } from '@angular/core';
import{ApiservicesService} from '../service/apiservices.service'

@Component({
  selector: 'app-topnews',
  templateUrl: './topnews.component.html',
  styleUrls: ['./topnews.component.css']
})
export class TopnewsComponent implements OnInit {

  constructor(private _services:ApiservicesService) { }

  topnewsDisplay:any=[];

  ngOnInit(): void {

    this._services.topnews().subscribe((result)=>{
      console.log(result);
      this.topnewsDisplay=result.articles;
    })
  }

}
