import jsonApiUrl from 'utils/json-api-url'

import { createActionsFromBaseAction } from 'utils/api-action';

import createAPIAction from 'utils/api-action';

export const FETCH_CREATOR_POST_FEED = 'fetchCreator/POST_FEED';

export const FETCH_CREATOR_POST_FEED_ACTIONS =
        createActionsFromBaseAction(FETCH_CREATOR_POST_FEED);

const fetchCreatorPostFeedIncludes = ['user.null']
const fetchCreatorPostFeedFields = {
    'post': [
        'title',
        'content',
        'like_count',
        'image',
        'published_at',
        'current_user_has_liked'
    ],
    'user': [
        'image_url',
        'full_name'
    ]
}

const postFeedAPIAction = createAPIAction(FETCH_CREATOR_POST_FEED);

export const fetchCreatorPostFeed = (creatorId) => {
    const url = jsonApiUrl('/stream', {
        'include': fetchCreatorPostFeedIncludes,
        'fields': fetchCreatorPostFeedFields,
        'page': {
            'cursor': 'null'
        },
        'filter': {
            'is_by_creator': 'true',
            'is_following': 'false',
            'creator_id': creatorId
        }
    });

    return postFeedAPIAction(url);
}
