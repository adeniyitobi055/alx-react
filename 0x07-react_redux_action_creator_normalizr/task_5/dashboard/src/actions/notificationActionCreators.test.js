import {
  NotificationTypeFilters,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "./notificationsActionTypes";

import {
  markAsRead,
  setNotificationFilter,
} from "./notificationActionCreators";

describe('test for notification action', () => {
    it('should create right action for markAsRead', () => {
        expect(markAsRead(1)).toEqual({ type: MARK_AS_READ, index: 1 });
    });

    it('should create right action for notification filter', () => {
        expect(setNotificationFilter(NotificationTypeFilters['DEFAULT'])).toEqual({
            type: SET_TYPE_FILTER,
            filter: 'DEFAULT',
        });
    });
});