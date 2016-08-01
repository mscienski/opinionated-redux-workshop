import { connect } from 'react-redux'
import { fetchCreatorPostFeed } from 'actions/creator-post-feed';
import PostFeed from 'components/PostFeed'


const mapStateToProps = (state: {postFeed: {isLoading, posts}}, ownProps) => {
    return {
        creatorId: ownProps.creatorId,
        isLoading,
        posts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMount: (creatorId) => {
            dispatch(fetchCreatorPostFeed(creatorId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed)
