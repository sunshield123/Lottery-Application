import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotterydrawComponent } from './lotterydraw.component';

describe('LotterydrawComponent', () => {
  let component: LotterydrawComponent;
  let fixture: ComponentFixture<LotterydrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotterydrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotterydrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
