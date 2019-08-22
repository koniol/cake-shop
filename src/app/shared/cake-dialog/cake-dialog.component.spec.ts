import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeDialogComponent } from './cake-dialog.component';

describe('CakeDialogComponent', () => {
  let component: CakeDialogComponent;
  let fixture: ComponentFixture<CakeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CakeDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
