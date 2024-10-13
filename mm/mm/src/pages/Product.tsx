// src/pages/Products.tsx
import React from 'react';
import img1 from '../img/dog_1.jpg';
import '../css/product.css'


const Product = () => {
    const items = [
        { imgSrc: img1, text: "test", description: "설명", link: "/board" },
        { imgSrc: img1, text: "test", description: "설명", link: "/board" },
        { imgSrc: img1, text: "test", description: "설명", link: "/board" },
        { imgSrc: img1, text: "test", description: "설명", link: "/board" },
        { imgSrc: img1, text: "test", description: "설명", link: "/board" },
        { imgSrc: img1, text: "test", description: "설명", link: "/board" },
        { imgSrc: img1, text: "test", description: "설명", link: "/board" },
        { imgSrc: img1, text: "test", description: "설명", link: "/board" },
        { imgSrc: img1, text: "test", description: "설명", link: "/board" },
      ];
    
      return (
        <div className='menubar'>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.link}>
                  <img src={item.imgSrc} width='100%' height='60%' alt='item'/>
                  <p>{item.text}</p>
                </a>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      );
};

export default Product;