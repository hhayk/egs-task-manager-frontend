import { Component, ViewContainerRef, Inject } from '@angular/core';
import { PopupService } from './services/popup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'egs-task-manager-frontend';

  constructor(
    @Inject(ViewContainerRef) viewContainerRef: ViewContainerRef,
    @Inject(PopupService) popupService: PopupService,
    private router: Router,
  ) {
    popupService.setRootViewContainerRef(viewContainerRef);
  }

  rootClick() {
    this.router.navigate(['/']);
  }
}
