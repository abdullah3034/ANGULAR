import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {Home} from './pages/home/home';
import { StringInterpolation } from './components/Data-binding/string-interpolation/string-interpolation';
import { Navbar } from './components/navbar/navbar';
import { Propertybinding } from './components/Data-binding/propertybinding/propertybinding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,StringInterpolation,Navbar,Propertybinding], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');

  display(){
    alert("clicked");
  }
}
