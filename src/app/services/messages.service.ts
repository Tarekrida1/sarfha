import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {


  constructor(private fs: AngularFirestore) {}
  getmessages() {
  return  this.fs.collection('messages', ref => ref.orderBy('time', 'asc')).snapshotChanges();
  }
  addMessage(showTime: string , content: string , time: number, userName: string) {
 this.fs.collection('messages').add({ showTime, content, time, userName});
  }
}
