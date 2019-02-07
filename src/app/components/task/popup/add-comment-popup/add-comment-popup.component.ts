import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommentModel } from 'src/app/models/comment';

@Component({
  selector: 'app-add-comment-popup',
  templateUrl: './add-comment-popup.component.html',
  styleUrls: ['./add-comment-popup.component.less']
})
export class AddCommentPopupComponent implements OnInit {
  @Output() okEmitter = new EventEmitter<CommentModel>();
  @Output() cancelEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  okClick(text: string) {
    const comment = new CommentModel();
    comment.text = text;

    this.okEmitter.emit(comment);
  }

  cancelClick() {
    this.cancelEmitter.emit(null);
  }
}
