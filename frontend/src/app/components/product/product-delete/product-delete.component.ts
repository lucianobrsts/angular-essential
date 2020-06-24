import { ProductService } from './../product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  deleteProduct(): void {
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Produto deletado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}