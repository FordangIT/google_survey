//액션 타입에 따라 상태 어떻게 변경할지 정의
import { Action } from "redux";
import { UPDATE_TITLE, UPDATE_DESCRIPTION } from "../actions/titleAction";

const initialState = {
  title: "",
  description: "",
};

export function titleReducer(state = initialState, action: Action) {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: (action as { type: typeof UPDATE_TITLE; payload: string })
          .payload,
      };
    case UPDATE_DESCRIPTION:
      return {
        ...state,
        description: (
          action as { type: typeof UPDATE_DESCRIPTION; payload: string }
        ).payload,
      };
    default:
      return state;
  }
}
