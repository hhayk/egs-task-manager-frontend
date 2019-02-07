import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationRootComponent } from './notification-root.component';

describe('NotificationRootComponent', () => {
  let component: NotificationRootComponent;
  let fixture: ComponentFixture<NotificationRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
