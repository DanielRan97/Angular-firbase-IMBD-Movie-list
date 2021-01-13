import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { NbDialogRef } from '@nebular/theme';


@Component({
  selector: 'app-out',
  templateUrl: './out.component.html',
  styleUrls: ['./out.component.scss']
})
export class OutComponent implements OnInit {

  constructor(private router:Router,private log:AuthService, private angularFS:AngularFirestore,
    protected dialogRef: NbDialogRef<OutComponent>) { }
  logout(){
    this.log.googleLogoout().then(res => {
      this.router.navigate(['/login'])
    }).catch(err => console.log(err))
  }

  cancel() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
