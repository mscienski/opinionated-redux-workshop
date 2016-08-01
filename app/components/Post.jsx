import React from 'react'


const postStyle = {
    backgroundColor: 'white',
    borderRadius: '4px',
    maxWidth: '600px',
    padding: '16px'
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

export default ({ post }) => {
    return (
        <div style={postStyle}>
            <div style={h2ContainerStyle}>
                <h2 style={h2Style}>{ post.attributes.title }</h2>
            </div>
            {
                post.attributes.image ? <img src={post.attributes.image.url} style={imgStyle} /> : null
            }
            {
                post.attributes.content
            }
        </div>
    )
}
