import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbDialogService } from '@nebular/theme';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { HomeComponent } from '../home/home.component';
import { OutComponent } from '../out/out.component';
import { GusuerService } from '../guser.service';
import { User } from '../user';
import { Movie } from '../movie';
import { observable } from 'rxjs';






@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  categories:string [] = [];
    username:User[] =[];
    userEmail:string;
    showCategory:string;
    allMovies:Movie[]=[];
    action:Movie[]=[];
    drama:Movie[]=[];
    comedy:Movie[]=[];
    other:Movie[]=[];
   show:string;

    
    constructor(private router:Router,private sidebarService: NbSidebarService,private angularFS:AngularFirestore,
    private log:AuthService, private dialogService: NbDialogService,private user:GusuerService ) {
  }

  toggle() {
    this.sidebarService.toggle();
    
}

logOutOpen(){
  this.dialogService.open(OutComponent, {
    context: {
   
    },
  });
}
addMovieOpen(){
  this.dialogService.open(HomeComponent, {
    context: {
    
    },
  });
}

getUser(){
  new Promise(
    (resolve, reject) => {
      this.user.getCurrentUser().then(user => {
        if (user) { 
          this.username = [{displayName: user.displayName,email: user.email }];
          this.userEmail = user.email;
          console.log(this.username);
          this.getMovies();
          this.showAll();
        }
        else {
          this.username = null;
        }
      })
    }
  )
}

 getMovies(){
  this.angularFS.collection<Movie>(this.userEmail).valueChanges().subscribe(
    movies => {
      console.log(movies)
      movies.forEach(element => {
        if(!this.categories.includes(element.category)){
          this.categories.push(element.category)
        }
        
        
      });
      
      
    }
  )

 }
showAction(){
  this.action = [];
this.show = "Action";
this.angularFS.collection<Movie>(this.userEmail).valueChanges().subscribe(
  movies => {
    console.log(movies)
    movies.forEach(element => {
      if(element.category=="Action"){
        this.action.push({name:element.name,category:element.category,link:element.link,img:element.img})
      }})
  })
}
showDrama(){
  this.drama=[];
  this.show = "Drama";
  this.angularFS.collection<Movie>(this.userEmail).valueChanges().subscribe(
    movies => {
      console.log(movies)
      movies.forEach(element => {
        if(element.category=="Drama"){
          this.drama.push({name:element.name,category:element.category,link:element.link,img:element.img})
        }})
    })
  }
showComedy(){
  this.comedy=[];
  this.show = "Comedy";
  this.angularFS.collection<Movie>(this.userEmail).valueChanges().subscribe(
    movies => {
      console.log(movies)
      movies.forEach(element => {
        if(element.category=="Comedy"){
          this.comedy.push({name:element.name,category:element.category,link:element.link,img:element.img})
        }})
    })
  }
showOther(){
  this.other=[];
  this.show = "Other";
  this.angularFS.collection<Movie>(this.userEmail).valueChanges().subscribe(
    movies => {
      console.log(movies)
      movies.forEach(element => {
        if(element.category=="Other"){
          this.other.push({name:element.name,category:element.category,link:element.link,img:element.img})
        }})
    })
}
showAll(){
  this.allMovies=[];
  this.show = "All";
  this.angularFS.collection<Movie>(this.userEmail).valueChanges().subscribe(
    movies => {
      console.log(movies)
      movies.forEach(element => {
          this.allMovies.push({name:element.name,category:element.category,link:element.link,img:element.img}) })
})
}

deleteMovie(name){
  this.allMovies.forEach(element => {
    if(name==element.name){
      this.angularFS.collection(this.userEmail).doc(name).delete();
      for(let i=0; i<this.allMovies.length; i++){
        if(this.allMovies[i].name==name){
          this.allMovies.splice(i,1);
        }
      }
    }
  });
  this.comedy.forEach(element => {
    if(name==element.name){
      this.angularFS.collection(this.userEmail).doc(name).delete();
      for(let i=0; i<this.comedy.length; i++){
        if(this.comedy[i].name==name){
          this.comedy.splice(i,1);
        }
      }
    }
  });
  this.action.forEach(element => {
    if(name==element.name){
      this.angularFS.collection(this.userEmail).doc(name).delete();
      for(let i=0; i<this.action.length; i++){
        if(this.action[i].name==name){
          this.action.splice(i,1);
        }
      }
    }
  });
  this.drama.forEach(element => {
    if(name==element.name){
      this.angularFS.collection(this.userEmail).doc(name).delete();
      for(let i=0; i<this.drama.length; i++){
        if(this.drama[i].name==name){
          this.drama.splice(i,1);
        }
      }
    }
  });
  this.other.forEach(element => {
    if(name==element.name){
      this.angularFS.collection(this.userEmail).doc(name).delete();
      for(let i=0; i<this.other.length; i++){
        if(this.other[i].name==name){
          this.other.splice(i,1);
        }
      }
    }
  });
}

  ngOnInit(): void {
    this.getUser();
   
  }

}
