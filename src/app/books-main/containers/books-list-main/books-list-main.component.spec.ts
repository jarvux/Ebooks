import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListMainComponent } from './books-list-main.component';

describe('BooksListMainComponent', () => {
  let component: BooksListMainComponent;
  let fixture: ComponentFixture<BooksListMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksListMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
