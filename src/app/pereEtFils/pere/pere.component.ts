import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  pereProp = 'blue';
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  processRequest(input: any){
    alert(input);
  }
}
