import { MessagesService } from './../../services/messages.service';
import { Messages } from './../../interfaces/messages.interface';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: Messages[] = []; // messages array frome db
  constructor(private mes: MessagesService) {}
  ngOnInit() {
    this.mes.getmessages().subscribe(message => { // messages observer
      this.messages = message.map(mess => {
        return { id: mess.payload.doc.id, ...mess.payload.doc.data() };
      });
    });
  }
  sendMessage(form: NgForm) { // send message function
    const message = (form.value as Messages).content; // message content
    const time = Date.now(); // store message time in db
    const userName = 'أنت'; // user name for test only
    const showTime = new Date().toLocaleTimeString('en-US', { // display message time for client
      hour12: false,
      hour: 'numeric',
      minute: 'numeric'
    });
    this.mes.addMessage(showTime, message, time, userName);
  }
}
