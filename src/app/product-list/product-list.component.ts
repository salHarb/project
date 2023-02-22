import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private _Search_Filter: string = ''
  Products: IProduct[] = []
  Filtered_Product_by_Search: any[] = []


  constructor(private Product_Service: ProductService) {
    this.Product_Service.onClick.subscribe(res => {
      this.Filtered_Product_by_Search.filter(product => product._id == res._id).map(product => {
        return {
          ...res, Qty: product.Qty--
        }
      })
    })
  }

  ngOnInit(): void {
    this.Product_Service.getAllProducts().subscribe({
      next: (productData) => {
        console.log(productData.products)
        this.Products = productData.products
        this.Filtered_Product_by_Search = this.Products
      }
    })
  }

  set Search_Filter(value: string) {
    this._Search_Filter = value
    this.Filtered_Product_by_Search = this.filter_Products(value)
  }

  get Search_Filter(): string {
    return this._Search_Filter
  }

  toogleDiscription(ProductID: number): void {
    this.Products.forEach(function (item) {
      if (item.id == ProductID) {
        item.show_details = !item.show_details;
      }
    })
  };

  Toggle_Details(Product_id: number): void {
    /* this.movies.array.forEach(function(element:any) {
       if(element.id == Product_id)
       {
          element.show_details = !element.show_details
       }
    }); */
    for (let i = 0; i < this.Products.length; i++) {
      if (this.Products[i].id == Product_id && this.Products[i].show_details == false) {
        this.Products[i].show_details = true;
      }
      else if (this.Products[i].id == Product_id && this.Products[i].show_details == true) {
        this.Products[i].show_details = false;
      }
    }
  }
  filter_Products(val: string) {
    return this.Products.filter((product: any) =>
      product.ProductName.toLocaleLowerCase().includes(val.toLocaleLowerCase())
    )
  }
}
