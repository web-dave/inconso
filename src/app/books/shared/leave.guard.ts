import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate,
  CanActivate,
  CanLoad
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookNewComponent } from '../book-new/book-new.component';
import { BookEditComponent } from '../book-edit/book-edit.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard
  implements CanDeactivate<BookNewComponent | BookEditComponent> {
  canDeactivate(component: BookNewComponent): boolean {
    if (!component.isSaved()) {
      return confirm('R U SURE?');
    }
    return true;
  }
}
