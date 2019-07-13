import { types } from './types';

export const appActions = {
    fetchStart: () => {
        return {
            type: types.FETCH_START
        }
    },
    fetchSuccess: () => {
        return {
            type: types.FETCH_SUCCESS
        }
    },
    fetchFail: (error) => {
        return {
            type: types.FETCH_FAIL,
            payload: error
        }
    }
}