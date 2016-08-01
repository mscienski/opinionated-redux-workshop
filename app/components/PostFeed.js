import React, { PropTypes } from 'react'
import Post from 'components/Post'


/* crappy styles */
const postFeedStyle = {
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const postSpacerStyle = {
    marginTop: '0px',
    marginBottom: '24px'
}

/* component */
export default React.createClass({
    propTypes: {
        creatorId: PropTypes.string,
        posts: PropTypes.array,
        onMount: PropTypes.func
    },

    defaultProps: {
        posts: []
    },

    componentDidMount() {
        this.props.onMount(this.props.creatorId);
    },

    renderPost(post) {
        return (
            <div key={post.id}
                 style={postSpacerStyle}>
                <Post post={post} />
            </div>
        )
    },

    render() {
        const { posts, isLoading } = this.props;

        return isLoading ?
            <span>'Loading!'</span> :
            (<div style={postFeedStyle}>
                <style dangerouslySetInnerHTML={{
                    __html: `
                        @keyframes text-cycler {
                          0%, 100% {
                            background-color: #e03fdf;
                          }
                          14% {
                            background-color: #ef2f69;
                          }
                          28% {
                            background-color: #e8a256;
                          }
                          43% {
                            background-color: #e9dc56;
                          }
                          57% {
                            background-color: #73eb5d;
                          }
                          71% {
                            background-color: #65a9f6;
                          }
                          86% {
                            background-color: #7a54f0;
                          }
                        }

                        .post:hover {
                            animation: text-cycler 0.5s infinite;
                                       cursor: pointer;
                        }
                    `
                }} />
                { posts && posts.map(this.renderPost) }
            </div>)
    }
})
