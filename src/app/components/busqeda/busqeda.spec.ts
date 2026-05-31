import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Busqeda } from './busqeda';

describe('Busqeda', () => {
  let component: Busqeda;
  let fixture: ComponentFixture<Busqeda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Busqeda],
    }).compileComponents();

    fixture = TestBed.createComponent(Busqeda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
