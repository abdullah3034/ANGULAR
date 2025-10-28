import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  imports: [],
  templateUrl: './string-interpolation.html',
  styleUrl: './string-interpolation.css'
})
export class StringInterpolation {
 username = "Soniya Sharma"

    productData=  {
      pname:"Iphone 16 Pro Max",
      price:145000
    }

    changePrice(){
      this.productData.price = 180000
    }
}
