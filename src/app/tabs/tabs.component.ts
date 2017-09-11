
import { AfterContentInit, Component, ContentChildren, OnDestroy, OnInit, QueryList } from '@angular/core';
import { TabComponent } from "app/tab/tab.component";
import { Tab } from "../tab/tab.interface";


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChildren(TabComponent) public tabs:QueryList<TabComponent>;
  private tabsClickSubscription:any[]=[];

  constructor() { }

  

  ngOnInit() {
  }

  addTab(tab:Tab){
    
  }

  selectTab(tab:Tab) {
    this.tabs.forEach(tab=>tab.isActive = false);
    tab.isActive = true;
    
  }
  ngAfterContentInit(){
    this.tabs.forEach(tab=>{
      let subscription = tab.onClick.subscribe(()=>{
        console.log(`tab ${tab.title} content clicked`);
      });
      this.tabsClickSubscription.push(subscription);
    });
    this.selectTab(this.tabs.first);
  }
  


    public ngOnDestroy(): void {
      this.tabsClickSubscription.forEach(item=>item.unsubscribe() );
     }
}
