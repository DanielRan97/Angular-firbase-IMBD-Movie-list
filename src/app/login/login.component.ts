import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { NbDialogRef } from '@nebular/theme';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private angularFS:AngularFirestore, private router:Router,private auth:AuthService) { }
  loginWithGoogle(){
    this.auth.googleLogin().then(res => {
      console.log(res);     
      this.router.navigate(['/main']);
     
     
    })
  }
  
  
  ngOnInit(): void {
  }
}

