import React from 'react';
import { useParams } from 'react-router-dom';
import korea from './korea.jpg'
import car from './car.jpg';
import cool from './cool.jpg';
import boblid from './morroco.jpg';
import nature from './nature.jpg';

const BlogInfo = () => {
  const { slug } = useParams();

  const blogDetails = {
    info1: {
      title: '10 Historical Places In Korea',
      image: korea,
      content: 'Korea has been through a long history. Before introducing you the emblematic historic places, you should visit in Korea, let us sum up the main periods of Korean History.',
    },
    info2: {
      title: 'Box 2',
      image: boblid ,
      content: 'Detailed information about Box 2...',
    },
    info3: {
      title: 'Box 3',
      image: nature,
      content: 'Detailed information about Box 3...',
    },
    info4: {
      title: 'Box 4',
      image: cool,
      content: 'Detailed information about Box 4...',
    },
    info5: {
      title: 'Box 5',
      image: car,
      content: 'Detailed information about Box 5...',
    },
    info6: {
      title: 'Box 6',
      image: 'path-to-image6.jpg',
      content: 'Detailed information about Box 6...',
    },
  };

  const blog = blogDetails[slug];

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} style={{height: '500px', width:'100%', objectFit: 'cover'}} />
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogInfo;
