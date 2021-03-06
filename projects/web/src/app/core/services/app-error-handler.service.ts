import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, ErrorHandler, isDevMode } from '@angular/core';

import { environment as env } from '@app/env/environment';

import { NotificationService } from 'shared-ui';

/** Application-wide error handler that adds a UI notification to the error handling
 * provided by the default Angular ErrorHandler.
 */
@Injectable()
export class AppErrorHandler extends ErrorHandler {
  constructor(private notificationsService: NotificationService) {
    super();
  }

  handleError(error: Error | HttpErrorResponse) {
    let displayMessage = 'An error occurred.';

    if (isDevMode()) {
      displayMessage += ' See console for details.';
    }

    this.notificationsService.error(displayMessage);

    super.handleError(error);
  }
}
