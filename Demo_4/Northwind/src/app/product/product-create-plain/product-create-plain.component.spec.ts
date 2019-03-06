import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreatePlainComponent } from './product-create-plain.component';

describe('ProductCreatePlainComponent', () => {
  let component: ProductCreatePlainComponent;
  let fixture: ComponentFixture<ProductCreatePlainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCreatePlainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCreatePlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
