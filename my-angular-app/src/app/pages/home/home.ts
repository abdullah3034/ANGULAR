import { Component } from '@angular/core';
import { Carousel } from '../../components/carousel/carousel';
import {Footer} from '../../components/footer/footer';  
import {Navbar} from '../../components/navbar/navbar';
import { Advertise } from '../../components/advertise/advertise';
import { Leftimagecard } from '../../components/leftimagecard/leftimagecard';
import { Rightimagecard } from '../../components/rightimagecard/rightimagecard';


@Component({
  selector: 'app-home',
  imports: [Navbar, Carousel, Footer,Advertise, Leftimagecard, Rightimagecard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
