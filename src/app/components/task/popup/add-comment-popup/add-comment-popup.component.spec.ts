import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommentPopupComponent } from './add-comment-popup.component';

describe('AddCommentPopupComponent', () => {
  let component: AddCommentPopupComponent;
  let fixture: ComponentFixture<AddCommentPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommentPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
