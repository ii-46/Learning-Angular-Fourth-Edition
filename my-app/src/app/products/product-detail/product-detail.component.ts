import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter<Product>();

  constructor() {
    // console.log(`Name is ${this.name} in the constructor`);
  }
  ngOnInit(): void {
    // console.log(`Name is ${this.name} in the ngOnInit`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }
  buy() {
    this.bought.emit(this.product);
  }
  get productName(): string | undefined {
    // console.log(`Get ${this.name}`);
    return this.product?.name;
  }
}
