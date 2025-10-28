import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  imports: [],
  templateUrl: './propertybinding.html',
  styleUrl: './propertybinding.css'
})
export class Propertybinding {
url :string = "https://stream-blog-v2.imgix.net/blog/wp-content/uploads/f9547f9b9ba2dfa409118a00d2b7691d/Angular.png?auto=format&auto=compress"
  width:string = "500"
  height:String = "300"

changeToAngular(){
this.url = "https://stream-blog-v2.imgix.net/blog/wp-content/uploads/f9547f9b9ba2dfa409118a00d2b7691d/Angular.png?auto=format&auto=compress"
this.width="500"
this.height = "300"
}

changeToReact(){
  this.width = "500"
  this.height = "100"
this.url = "https://th.bing.com/th/id/OIP.LRCbygP9AZfeK3cNWE-OIQHaE8?rs=1&pid=ImgDetMain"
}
}
