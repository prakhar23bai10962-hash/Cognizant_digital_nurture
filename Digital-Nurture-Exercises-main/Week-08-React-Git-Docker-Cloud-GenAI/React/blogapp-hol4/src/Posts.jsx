import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Map the JSON objects to instances of our Post model class
                const postInstances = data.map(item => new Post(item.userId, item.id, item.title, item.body));
                this.setState({ posts: postInstances });
            })
            .catch(error => {
                console.error("Failed to load posts:", error);
                throw error; // Propagate to trigger componentDidCatch if needed
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        console.error("componentDidCatch triggered:", error, info);
        alert("An error occurred in Posts component: " + error.message);
    }

    render() {
        return (
            <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
                <h2 style={{ textAlign: 'center', color: '#333' }}>Latest Blog Posts</h2>
                <hr />
                {this.state.posts.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#666' }}>Loading posts...</p>
                ) : (
                    this.state.posts.map(post => (
                        <div key={post.id} style={{ borderBottom: '1px solid #eee', padding: '15px 0' }}>
                            <h3 style={{ color: '#2c3e50', margin: '0 0 10px 0' }}>{post.title}</h3>
                            <p style={{ color: '#555', lineHeight: '1.6', margin: 0 }}>{post.body}</p>
                        </div>
                    ))
                )}
            </div>
        );
    }
}

export default Posts;
