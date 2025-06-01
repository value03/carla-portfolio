import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTitleComponent } from './work-title.component';

describe('WorkTitleComponent', () => {
  let component: WorkTitleComponent;
  let fixture: ComponentFixture<WorkTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
