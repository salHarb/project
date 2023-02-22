import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnChanges {


  myProduct: any = {}

  constructor(private PrdctService: ProductService, private route: ActivatedRoute) {

  }

  click(product: any) {
    product.Qty--;
    this.PrdctService.onClick.emit(product)
  }
  ngOnChanges(changes: SimpleChanges): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.PrdctService.getProductById(id).subscribe({
      next: (PrdctData) => {
        this.myProduct = PrdctData.product
        console.log(this.myProduct)
      }
    })
  }


  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.PrdctService.getProductById(id).subscribe({
      next: (PrdctData) => {
        this.myProduct = PrdctData.product
        console.log(this.myProduct)
      }
    })
  }
}
