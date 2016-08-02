import makeApiThunk from 'utils/make-api-thunk'
import jsonApiUrl from 'utils/json-api-url'


export const LIKE_POST = 'LIKE_POST'

export const likePost = (postId) => {
    const url = jsonApiUrl('/posts/${postId}/likes', {
        include: ['post.null'],
        fields: {
            'post': [
                'current_user_has_liked'
            ]
        }
    })
    return makeApiThunk(`${LIKE_POST}_${postId}`, url, { method: 'POST' })
}
