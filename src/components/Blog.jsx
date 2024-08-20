import React from 'react';
import { Link } from 'react-router-dom';
import BlogProp from './BlogProp';
import korea from './korea.jpg';
import car from './car.jpg';
import cool from './cool.jpg';
import boblid from './morocco.jpg';
import nature from './nature.jpg';
import map from './map.jpg'


const Blog = () => {
  const boxes = [
    { id: 1, title: '10 Historical Places In Korea', image: korea, slug: "info1" },
    { id: 2, title: 'Explore culture through cuisine', image: boblid, slug: "info2" },
    { id: 3, title: 'Box 3', image: nature, slug: "info3" },
    { id: 4, title: 'Box 4', image: cool, slug: "info4" },
    { id: 5, title: 'Box 5', image: car, slug: "info5" },
    { id: 6, title: 'Box 6', image: map, slug: "info6" },
  ];

  return (
    <div className="article-page">
      <h1 className="blog-title">Articles</h1>
      <div className="boxes-container">
        {boxes.map((box) => (
          <Link key={box.id} to={`/blog/${box.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <BlogProp title={box.title} image={box.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;

