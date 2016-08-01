import { FETCH_CREATOR_POST_FEED_START, FETCH_CREATOR_POST_FEED_SUCCESS } from 'actions/creator-post-feed';
import deepEquals from 'deep-equal';

import makeIsLoadingReducer = 'reducers/make-is-loading';

import LIKE_POST = combineReducer({
    [LIKE_POST]: makeIsLoadingReducer(LIKE_POST),
});

const initialState = {
    isLoading: null,
    posts: []
};

const isLoadingReducer = makeIsLoadingReducer('FETCH_CREATOR_POST_FEED');

export const postFeed = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CREATOR_POST_FEED_START: {
            const newState = {
                ...state,
                isLoading: isLoadingReducer(state.isLoading, action),
            };

            return deepEquals(state, newState) ? state : newState;
        }

        case FETCH_CREATOR_POST_FEED_SUCCESS: {
            const newState = {
                ...state,
                isLoading: isLoadingReducer(state.isLoading, action),
                posts: action.posts
            };

            return deepEquals(state, newState) ? state : newState;
        }

        default:
            return state;
    }
};
