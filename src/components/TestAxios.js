import React from 'react';
import axios from 'axios';

const baseURL = "http://localhost:8000/lipila/api/v1/lipila-payment/";

export default function PersonList() {
    const [post, setPost] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        console.log(JSON.stringify(response.data));
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;
  
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }