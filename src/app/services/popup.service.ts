import { Injectable, ComponentFactoryResolver, Inject, ViewContainerRef, Type } from '@angular/core';
import { AddCommentPopupComponent } from '../components/task/popup/add-comment-popup/add-comment-popup.component';
import { CommentModel } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  factoryResolver: ComponentFactoryResolver;
  rootViewContainer: ViewContainerRef;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver;
  }

  setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addComment(okCallback: (comment: CommentModel) => void, cancelCallback: () => void) {
    this.addDynamicComponent(AddCommentPopupComponent, okCallback, cancelCallback);
  }

  private addDynamicComponent(popup: Type<any>, okCallback: (props: any) => void, cancelCallback?: () => void) {
    const factory = this.factoryResolver.resolveComponentFactory(popup);
    const component = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);

    component.instance.okEmitter.subscribe((props) => {
      component.destroy();
      okCallback(props);
    });
    component.instance.cancelEmitter.subscribe(_ => {
      component.destroy();
      cancelCallback();
    });
  }
}
