import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Movie } from '../movie';
import { HttpClient } from '@angular/common/http';
import { NbDialogRef } from '@nebular/theme';
import { User } from 'firebase';
import { GusuerService } from '../guser.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  movie:Movie={
    name:"",
    category:"",
    link:"",
    img:"",
  }

  username:Array<object> = [];
  userMail:string;
  allMovies:Movie[]=[];
  alredy:string;
  movieName:string[]=[];
   english:string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
   imbdT:string;
   onlyImage:string;
  

  constructor(private angularFS:AngularFirestore,private http:HttpClient, 
    protected dialogRef: NbDialogRef<HomeComponent>,private user:GusuerService
    ) {}

    checkImage(name,category,link,img){
      var str = img;
      var res = str.substring(0, 8);
      res == "https://"? this.checkEnglisg(name,category,link,img):this.onlyImage="Only image link";
      console.log(res);
      
    }


    checkIMDbLink(name,category,link,img){
      var str = link;
      var res = str.substring(0, 16);
      res == "https://www.imdb"? this.checkEnglisg(name,category,link,img):this.imbdT="Only IMBd link"
      
    }

checkEnglisg(name,category,link,img){
  var index;

  for (index = name.length - 1; index >= 0; --index) {
      if (this.english.indexOf(name.substring(index, index + 1)) < 0) {
        this.alredy = "Only english"
      }
      else{
        this.addMovie(name,category,link,img); 
        
      }
  } 
      
}

 addMovie(name,category,link,img){

  if(!this.movieName.includes(name)){
    this.angularFS.collection(this.userMail).doc(name).set({name:name,category:category,link:link,img:img});
    this.cancel(); 
  }
  else{
    this.alredy = "This movie alredy in your list"
  }
;
}

cancel() {
  this.dialogRef.close();
}
getUser(){
  new Promise(
    (resolve, reject) => {
      this.user.getCurrentUser().then(user => {
        if (user) { 
          this.userMail = user.email;
           this.username = [{displayName: user.displayName,email: user.email }];
           this.getMovies();
        }
        else {
          this.username = null;
        }
      })
    }
  )
}

getMovies(){
  this.angularFS.collection<Movie>(this.userMail).valueChanges().subscribe(
    movies => {
      movies.forEach(element => {
          this.allMovies.push({name:element.name,category:element.category,link:element.link,img:element.img});
          this.movieName.push(element.name);
         
        }
        );
    }
  )

 }

ngOnInit(): void {
  this.getUser();
  this.getMovies();
  
} 
}