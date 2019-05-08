import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseEnPlaceComponent } from './mise-en-place.component';

describe('MiseEnPlaceComponent', () => {
  let component: MiseEnPlaceComponent;
  let fixture: ComponentFixture<MiseEnPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiseEnPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiseEnPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
