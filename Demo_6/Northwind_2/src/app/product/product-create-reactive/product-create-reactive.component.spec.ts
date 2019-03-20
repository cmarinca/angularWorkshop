import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateReactiveComponent } from './product-create-reactive.component';

describe('ProductCreateReactiveComponent', () => {
  let component: ProductCreateReactiveComponent;
  let fixture: ComponentFixture<ProductCreateReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCreateReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCreateReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
