export const UPDATE_TITLE = "UPDATE_TITLE";
export const UPDATE_DESCRIPTION = "UPDATE_DESCRIPTION";

interface UpdateTitleAction {
  type: typeof UPDATE_TITLE;
  payload: string;
}

interface UpdateDescriptionAction {
  type: typeof UPDATE_DESCRIPTION;
  payload: string;
}

export function updateTitle(newTitle: string): UpdateTitleAction {
  return { type: UPDATE_TITLE, payload: newTitle };
}

export function updateDescription(
  newDescription: string
): UpdateDescriptionAction {
  return { type: UPDATE_DESCRIPTION, payload: newDescription };
}
