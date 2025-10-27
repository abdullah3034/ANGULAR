import { Component } from '@angular/core';
import { Carousel } from '../../components/carousel/carousel';
import {Footer} from '../../components/footer/footer';  
import {Navbar} from '../../components/navbar/navbar';
import { Advertise } from '../../components/advertise/advertise';


@Component({
  selector: 'app-home',
  imports: [Navbar, Carousel, Footer,Advertise],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
