import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Component({
  selector: 'app-quests',
  templateUrl: './quests.page.html',
  styleUrls: ['./quests.page.scss'],
})
export class QuestsPage implements OnInit {

  constructor( private fdb:AngularFireDatabase) 
    { }

  ngOnInit() {
  }


 
  option={
    slidesPerView:1,
    centeredSlides:true,
    loop:true,
    autoplay:true
    }



}
