import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchBills = ({
  page = 1,
  limit = 20,
  requestType = 'BILL',
}: {
  page: number;
  limit: number;
  requestType: string;
}) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: `${requestType}_REQUEST_START`,
      });

      const headers = {
        Authorization:
          'Basic ' +
          btoa(
            import.meta.env.VITE_USER_EMAIL +
              ':' +
              import.meta.env.VITE_USER_PASS
          ),
      };

      axios
        .get(
          `https://ak.contentcubed.com/api/documents?search=type:${requestType.toLowerCase()}&page=${page}&limit=${limit}`,
          { headers }
        )
        .then((response) => {
          dispatch({
            type: `${requestType}_SUCCESSFULLY_FETCHED`,
            payload: response.data.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: `${requestType}_FAILED_FETCH`,
            payload: error,
          });
        });
    } catch (error) {
      dispatch({
        type: `${requestType}_FAILED_FETCH`,
        payload: error,
      });
    }
  };
};
