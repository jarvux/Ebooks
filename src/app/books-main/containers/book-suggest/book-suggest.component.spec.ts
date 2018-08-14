import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSuggestComponent } from './book-suggest.component';

describe('BookSuggestComponent', () => {
  let component: BookSuggestComponent;
  let fixture: ComponentFixture<BookSuggestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSuggestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
