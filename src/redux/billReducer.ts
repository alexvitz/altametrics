const initialState = {
  bills: [],
  isLoading: false,
  error: '',
  page: 1,
  limit: 20,
};

const billReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'BILL_REQUEST_START':
      return { ...state, isLoading: true, error: '' };

    case 'BILL_SUCCESSFULLY_FETCHED':
      return {
        ...state,
        bills: action.payload,
        isLoading: false,
      };

    case 'BILL_FAILED_FETCH':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case 'INVOICE_REQUEST_START':
      return { ...state, isLoading: true, error: '' };

    case 'INVOICE_SUCCESSFULLY_FETCHED':
      return {
        ...state,
        bills: action.payload,
        isLoading: false,
      };

    case 'INVOICE_FAILED_FETCH':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case 'CHANGE_PAGE':
      return { ...state, page: action.payload };

    case 'CHANGE_LIMIT':
      return {
        ...state,
        CHANGE_LIMIT: action.payload,
      };

    default:
      return state;
  }
};

export default billReducer;
