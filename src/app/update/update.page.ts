import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodooService } from '../todoo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  @Input() task;
  categories = ['work','personal','home']

  taskName
  taskDate
  taskPriority
  taskCategory
  taskObject
  constructor(public modalCtrl:ModalController,public todooService:TodooService) { }
  
  selectedCategory(index){
    this.taskCategory=this.categories[index]
    }

  ngOnInit() {
    this.taskName= this.task.value.itemName;
    this.taskDate= this.task.value.itemDueDate;
    this.taskPriority=this.task.value.itemPriority;
    this.taskCategory=this.task.value.itemCategory;
  }
  async dismis(){
    await this.modalCtrl.dismiss(this)
    }

    async update(){
      this.taskObject=({itemName:this.taskName,
        itemDueDate:this.taskDate,
        itemPriority:this.taskPriority,
        itemCategory:this.taskCategory
      });
      let uid= this.task.key
      await this.todooService.updateTask(uid,this.taskObject);
      this.dismis();  
    }
}
