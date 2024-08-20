import React from 'react';
import { useParams } from 'react-router-dom';
import korea from './korea.jpg';
import car from './car.jpg';
import cool from './cool.jpg';
import boblid from './morocco.jpg';
import nature from './nature.jpg';
import map from './map.jpg';

const BlogInfo = () => {
  const { slug } = useParams();

  const blogDetails = {
    info1: {
      title: '10 Historical Places In Korea',
      image: korea,
      content: 'Korea has been through a long history. Before introducing you the emblematic historic places, you should visit in Korea, let us sum up the main periods of Korean History.',
    },
    info2: {
      title: 'Morocco as the finest destination for every food lover',
      image: boblid,
      content: 'From Harira to CousCous and other traditional dishes , becoming a sensation for every traveler thats looking to explore the culture of a country through their stomach',
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
      title: 'Our Recommendations',
      image: map,
      content: 'Detailed information about Box 6...',
    },
  };

  const blog = blogDetails[slug];

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div style={{ margin: '0 10%', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '20px' }}>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} style={{ height: '500px', width: '100%', objectFit: 'cover' }} />
      <p style={{ textAlign: 'left', marginTop: '20px' }}>{blog.content}</p>
    </div>
  );
};

export default BlogInfo;