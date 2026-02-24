import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card';
import { Product } from '../../product';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  const mockProduct: Product = {
    id: 1,
    name: 'Test Product',
    description: 'Test Description',
    price: 1000,
    rating: 4.5,
    image: 'test.jpg',
    images: ['test1.jpg', 'test2.jpg', 'test3.jpg'],
    link: 'https://test.com'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});