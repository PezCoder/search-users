export const UPDATE_SEARCH_SUGGESTIONS = 'UPDATE_SEARCH_SUGGESTIONS';
export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';
export const UPDATE_FOCUS_TO_INDEX = 'UPDATE_FOCUS_TO_INDEX';
export const FOCUS_NEXT_SUGGESTION = 'FOCUS_NEXT_SUGGESTION';
export const FOCUS_PREVIOUS_SUGGESTION = 'FOCUS_PREVIOUS_SUGGESTION';
export const UPDATE_DISABLE_MOUSE_EVENT = 'UPDATE_DISABLE_MOUSE_EVENT';

const initialState = {
  suggestions: null,
  query: '',
  focusedIndex: null,
  disableMouseEvents: false,
};

export default function searchReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_SEARCH_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload.suggestions,
      };

    case UPDATE_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload.query,
      };

    case UPDATE_FOCUS_TO_INDEX:
      return {
        ...state,
        focusedIndex: action.payload.suggestionIndex,
      };

    case UPDATE_DISABLE_MOUSE_EVENT:
      return {
        ...state,
        disableMouseEvents: action.payload.disable,
      };


    default:
      return { ...state };
  }
}

export const updateSearchSuggestions = (suggestions) => ({
  type: UPDATE_SEARCH_SUGGESTIONS,
  payload: {
    suggestions
  },
});

export const disableMouseEvents = (suggestions) => ({
  type: UPDATE_SEARCH_SUGGESTIONS,
  payload: {
    suggestions
  },
});

export const updateSearchQuery = (query) => ({
  type: UPDATE_SEARCH_QUERY,
  payload: {
    query
  },
});

export const updateFocusToIndex = (suggestionIndex) => ({
  type: UPDATE_FOCUS_TO_INDEX,
  payload: {
    suggestionIndex
  },
});

export const updateDisableMouseEvents = (disable) => ({
  type: UPDATE_DISABLE_MOUSE_EVENT,
  payload: {
    disable
  },
});

export const focusNextSuggestion = () => (dispatch, getState) => {
  const { search } = getState();
  const { focusedIndex, suggestions } = search;

  // If no suggestions, reset the index
  if (!suggestions || !suggestions.length) {
    return dispatch(updateFocusToIndex(null));
  }

  const isLastSuggestionFocused = focusedIndex === suggestions.length - 1;
  if (isLastSuggestionFocused) {
    return dispatch(updateFocusToIndex(0));
  }

  return dispatch(updateFocusToIndex(
    focusedIndex === null ? 0 : focusedIndex + 1
  ));
};

export const focusPreviousSuggestion = () => (dispatch, getState) => {
  const { search } = getState();
  const { focusedIndex, suggestions } = search;

  // If no suggestions, reset the index
  if (!suggestions || !suggestions.length) {
    return dispatch(updateFocusToIndex(null));
  }

  const isFirstSuggestionFocused = focusedIndex === 0;
  if (isFirstSuggestionFocused) {
    return dispatch(updateFocusToIndex(suggestions.length - 1));
  }

  return dispatch(updateFocusToIndex(
    focusedIndex === null ? suggestions.length - 1 : focusedIndex -1
  ));
};

