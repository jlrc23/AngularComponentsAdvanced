import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';
import { AfterContentInit,  Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  public isAddTimerVisible:boolean = false;
  public isEndTimerAlertVisible:boolean = false;
  public time:number =0;
  public timers:Array<number> = [];

  @ViewChild(SimpleAlertViewComponent) alert:SimpleAlertViewComponent;

  constructor() { 
    this.timers = [3,20,185];

  }
  logCountdownEnd(){
    console.log("Terminado");
  }

  public showAddTimer(){
    this.isAddTimerVisible = true;
  }

  public hideAddTimer(){
    this.isAddTimerVisible = false;
  }
  public showEndTimerAlert(){
    this.isEndTimerAlertVisible = true;
  }

  public hideEndTimerAlert(){
    this.isEndTimerAlertVisible = false;
  }

  public submitAddTimer(){
    this.timers.push(this.time);
    this.hideAddTimer();
  }

    public ngAfterContentInit(): void {
       console.log(alert);
       this.alert.title = "Hi";
       this.alert.message = "Message";
    }


}
