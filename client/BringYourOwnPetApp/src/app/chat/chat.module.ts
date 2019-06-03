import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChatPage } from './chat.page';

import { AutosizeModule } from 'ngx-autosize'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
    {
      path: '',
      component: ChatPage
    }
  ]),
  AutosizeModule,
],
  declarations: [ChatPage]
})
export class ChatPageModule {}
