import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class GusuerService {

  constructor( public db:AngularFirestore,public fbAuth:AngularFireAuth) { }


  getCurrentUser() :Promise<User>
  {
    return new Promise(
      (resolve,reject) =>{
        const user = firebase.auth().onAuthStateChanged( (user) => {
         
          user? resolve(user) : resolve(null);
        })

      }
    )
  }
}

