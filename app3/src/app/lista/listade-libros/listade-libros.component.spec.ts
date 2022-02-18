import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadeLibrosComponent } from './listade-libros.component';

describe('ListadeLibrosComponent', () => {
  let component: ListadeLibrosComponent;
  let fixture: ComponentFixture<ListadeLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadeLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadeLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
