import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetsUiComponent } from './sheets-ui.component';

describe('SheetsUiComponent', () => {
  let component: SheetsUiComponent;
  let fixture: ComponentFixture<SheetsUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetsUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
