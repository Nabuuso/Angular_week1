import { Component, OnInit } from '@angular/core';
// import { constructor } from 'assert';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit { 
  
  title = 'QUOTES' 

 
  constructor() { }

  ngOnInit(): void {
  
}
}
