import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateTemplatedComponent } from './product-create-templated.component';

describe('ProductCreateTemplatedComponent', () => {
  let component: ProductCreateTemplatedComponent;
  let fixture: ComponentFixture<ProductCreateTemplatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCreateTemplatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCreateTemplatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
