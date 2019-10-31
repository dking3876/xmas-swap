import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'xmas-game';
  items = [
    {
      name: "something 1",
      active: false
    },
    {
      name: "something 2",
      active: true
    },
    {
      name: "something 3",
      active: false
    },
    {
      name: "something 4",
      active: false
    },
    {
      name: "something 5",
      active: false
    },
    {
      name: "something 6",
      active: false
    },
    {
      name: "something 7",
      active: false
    },
    {
      name: "something 8",
      active: false
    }
  ]
  timeout = 1;
  interval = Math.random() * 3;
  ngAfterViewInit(){
    console.log(this.interval);
    setTimeout(()=>{
      this.newActive();
    },this.timeout);
  }
  newActive(){
    var listing = document.getElementsByClassName('item');
    var i;
    var active = false;
    for(i=0;i<listing.length;i++){
      if(listing[i].classList.contains('active')){
        active = true;
        listing[i].classList.remove('active');
      }else{
        if(active){
          listing[i].classList.add('active');
          active = false;
        }
      }
    }
    if(active){
      listing[0].classList.add('active');
    }
    this.timeout += this.interval;
    if(this.timeout < 250){
    setTimeout(()=>{
      this.newActive();
    },this.timeout);
  }
  }
}
