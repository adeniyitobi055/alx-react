import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "./uiActionCreators";

describe("test for UI notifications action creators", () => {
  it("should create proper action for loigin", () => {
    const email = "femi@gmail.com";
    const password = "femfem";

    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: "femi@gmail.com", password: "femfem" },
    });
  });

  it("should create proper action for logout", () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it("should create proper action for displaying drawer notification", () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("should create proper action for hiding drawer notification", () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});
