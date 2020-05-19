export const UPDATE_SEARCH_SUGGESTIONS = 'UPDATE_SEARCH_SUGGESTIONS';
export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';

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

const initialState = {
  suggestions: null,
  query: '',
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

    default:
      return { ...state };
  }
}
