import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private fs: AngularFirestore) {}
  getAllCategories() {
  return  this.fs.collection('categories').snapshotChanges();
  }
}
