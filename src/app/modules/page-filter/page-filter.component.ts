import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-filter',
  templateUrl: './page-filter.component.html',
  styleUrls: ['./page-filter.component.css']
})
export class PageFilterComponent implements OnInit {
  isSortByClicked : boolean =false;
  sortBy :string =''

  constructor() { }

  ngOnInit(): void {
  }

  getSortByData(sortby:string){
    this.sortBy = sortby
    this.isSortByClicked= false;
  }

  getDynamicDataLimit(){
    
  }

}
