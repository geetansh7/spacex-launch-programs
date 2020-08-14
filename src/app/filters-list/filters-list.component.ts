import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.scss']
})
export class FiltersListComponent implements OnInit {
  @Output() selectedFilter = new EventEmitter();
  filters:any = {};
  launchYears = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  constructor() { }

  ngOnInit() {
  }
  changeYearFilter(year: string){
    year === this.filters.year? delete this.filters.year: this.filters.year = year;;
    this.changeFilter();
  }
  changeLandFilter(isLanded: string){
    isLanded === this.filters.isLanded? delete this.filters.isLanded: this.filters.isLanded = isLanded;   
    this.changeFilter();
  }
  changeLaunchFilter(isLaunched: string){
    isLaunched === this.filters.isLaunched? delete this.filters.isLaunched: this.filters.isLaunched = isLaunched;   
    this.changeFilter();
  }
  changeFilter(){
    this.selectedFilter.emit(this.filters);
  }

}
