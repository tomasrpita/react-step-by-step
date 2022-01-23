import React from 'react';
import ReactDOM from 'react-dom';

// Las keys deben ser únicas solo entre hermanos
function Blog(props) {
    const sidebar = (
        <ul>
            {
                props.posts.map(post => {
                    return (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    )
                })
            }
        </ul>
    )

    const content = (
        <ul>
                {
                props.posts.map(post => {
                    return (
                        <div key={post.id}>
                        <h3 >
                            {post.title}
                        </h3>
                        <p>
                            {post.content}
                        </p>

                        </div>
                    )
                })
            }
        </ul>
    )

    return (
        <di>
            {sidebar}
            <hr></hr>
            {content}

        </di>
    );
    
}


const posts = [ 
     {id: 1, title: 'Hello World', content: 'Hello from another planet'},
     {id: 2, title: 'Hello planet', content: 'Hello from world'}
]
ReactDOM.render(
    <Blog posts={posts}/>,
    document.getElementById('root')
)

