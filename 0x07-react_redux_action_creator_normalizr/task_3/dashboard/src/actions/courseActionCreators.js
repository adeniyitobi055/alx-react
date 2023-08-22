import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export function select_course(index) {
  return {
    type: SELECT_COURSE,
    index: index,
  };
}

export function unselect_course(index) {
  return {
    type: UNSELECT_COURSE,
    index: index,
  };
}
