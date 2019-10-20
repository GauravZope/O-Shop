import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireObject} from 'angularfire2/database';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private db: AngularFireDatabase) { }

  saveUserDetails(user : firebase.User){
    this.db.object('/users/'+user.uid).update({
      name:user.displayName,
      email: user.email
    });
  }

  getUserDetails(userId : string  ): AngularFireObject<AppUser>{
    return  this.db.object('/users/'+ userId);
  }
}
