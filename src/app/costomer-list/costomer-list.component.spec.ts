import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostomerListComponent } from './costomer-list.component';

describe('CostomerListComponent', () => {
  let component: CostomerListComponent;
  let fixture: ComponentFixture<CostomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
