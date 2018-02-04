import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCharactersComponent } from './add-characters.component';

describe('AddCharactersComponent', () => {
  let component: AddCharactersComponent;
  let fixture: ComponentFixture<AddCharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
