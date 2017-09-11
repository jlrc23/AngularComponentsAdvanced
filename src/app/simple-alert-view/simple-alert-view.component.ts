import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-alert-view',
  templateUrl: './simple-alert-view.component.html',
  styleUrls: ['./simple-alert-view.component.sass']
})
export class SimpleAlertViewComponent implements OnInit {


  constructor() { }

  @Input() message:string;
  @Input() title:string;
  public visible:boolean =  true;

  ngOnInit() {
  }
  public dismiss(){
    this.visible = false;
  }

  public show(){
    this.visible = true;
  }
}
