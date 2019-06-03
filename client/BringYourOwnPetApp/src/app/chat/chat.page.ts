import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage  {

  
  messages = [
    {
      user: 'Ralph',
      createdAt: 1554090856000,
      msg: 'Wanna meet up at dog park?'
    },
    {
      user: 'Patrick',
      createdAt: 1554090956000,
      msg: 'Sure! I will bring the Scooby Snacks :) '
    },
    {
      user: 'Ralph',
      createdAt: 1554091056000,
      msg: 'See ya at 2!! '
    }
  ];
 
  currentUser = 'Ralph';
  newMsg = '';
  @ViewChild(IonContent) content: IonContent;
 
  constructor() {
  }
 
  sendMessage() {
    this.messages.push({
      user: 'Ralph',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });
 
    this.newMsg = '';
 
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }
 
}
