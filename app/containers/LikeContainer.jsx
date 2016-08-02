import { connect } from 'react-redux'
import LikeButton from 'components/LikeButton'
import { likePost } from 'actions/like-post'

const isLoadingSelector = makeIsLoadingSelector(LIKE_POST)

const mapStateToProps = (state, ownProps) => {
    isLoading: isLoadingSelector
}

const mapDispatchToProps = (dispatch, ownProps) => {
    onLike: dispatch(likePost(ownProps.postId))
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)
