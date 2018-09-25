import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryLimitPickerComponent } from './story-limit-picker.component';

describe('StoryLimitPickerComponent', () => {
  let component: StoryLimitPickerComponent;
  let fixture: ComponentFixture<StoryLimitPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryLimitPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryLimitPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
