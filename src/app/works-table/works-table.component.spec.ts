import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksTableComponent } from './works-table.component';

describe('WorksTableComponent', () => {
  let component: WorksTableComponent;
  let fixture: ComponentFixture<WorksTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
