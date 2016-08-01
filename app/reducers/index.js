import { FETCH_CREATOR_POST_FEED_START, FETCH_CREATOR_POST_FEED_SUCCESS } from 'actions/creator-post-feed';
import deepEquals from 'deep-equal';

const initialState = {
    isLoading: false,
    posts: []
};
export const postFeed = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CREATOR_POST_FEED_START: {
            const newState = {
                ...state,
                isLoading: true
            };

            return deepEquals(state, newState) ? state : newState;
        }

        case FETCH_CREATOR_POST_FEED_SUCCESS: {
            const newState = {
                ...state,
                isLoading: false,
                posts: action.posts
            };

            return deepEquals(state, newState) ? state : newState;
        }

        default:
            return state;
    }
};
