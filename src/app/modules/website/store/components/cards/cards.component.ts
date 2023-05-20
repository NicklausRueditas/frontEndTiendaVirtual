import { Component, OnInit } from '@angular/core';

import { Images } from '@core/interfaces/images';
import { Products } from '@core/interfaces/products';

import { ImagesService } from '@core/services/images.service';
import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  
  products: Products[] = [];

  constructor(private productsService: ProductsService, private imagesService: ImagesService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.productsService.getProducts().subscribe(
      (data: Products[]) => {
        console.log(data);
        this.products = data;
      },
      error => {
        console.log("Error from getProducts", error);
      }
    );
  }

  getFirstImageUrl(products: Products): string {
    if (products.images && products.images.length > 0) {
      return products.images[0].url;
    } else {
      return 'https://ih1.redbubble.net/image.1756098780.0530/mp,840x830,matte,f8f8f8,t-pad,1000x1000,f8f8f8.jpg'; // Opcional: Si no hay imágenes, puedes proporcionar una URL de imagen por defecto o dejarla en blanco.
    }
  }
}
