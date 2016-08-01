import React from 'react'

const postStyle = {
    backgroundColor: 'white',
    borderRadius: '50px',
    maxWidth: '600px',
    padding: '32px'
}

const imgStyle = {
    maxWidth: '100%'
}

const h2Style = {
    margin: '0px'
}

const h2ContainerStyle = {
    paddingBottom: '16px'
}

export default class Post extends React.Component {
    componentDidMount() {
        const { post } = this.props;

        this.refs.marquee.scrollAmount = post.attributes.title.length;
    }

    render() {
        const { post } = this.props;

        return (
            <div style={postStyle} className="post">
                <div style={h2ContainerStyle}>
                    <marquee ref="marquee" style={h2Style}>{ post.attributes.title }</marquee>
                </div>
                {
                    post.attributes.image ? <img src={post.attributes.image.largeUrl} style={imgStyle} /> : null
                }
                {
                    post.attributes.content
                }
            </div>
        );
    }
}
