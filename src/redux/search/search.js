export const UPDATE_SEARCH_SUGGESTIONS = 'UPDATE_SEARCH_SUGGESTIONS';
export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';
export const UPDATE_FOCUS_TO_INDEX = 'UPDATE_FOCUS_TO_INDEX';

export const updateSearchSuggestions = (suggestions) => ({
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

const initialState = {
  suggestions: null,
  query: '',
  focusedIndex: null,
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

    default:
      return { ...state };
  }
}
