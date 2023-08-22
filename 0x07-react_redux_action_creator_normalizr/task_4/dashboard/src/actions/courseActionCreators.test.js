import { select_course, unselect_course } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("test for action creators", () => {
  it("should return right action payload and type when selectCourse is called", () => {
    expect(select_course(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });
  it("should return right action payload and type when unselectCourse is called", () => {
    expect(unselect_course(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
