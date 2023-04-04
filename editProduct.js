import React, { useState } from 'react';
import img1 from "./cam.jpg"
import './editProduct.css';


function EditProduct() {
  const [activeImg, setActiveImg] = useState(0);
  const hoverImages = [img1, img1, img1];
  const [mainImg, setMainImg] = useState(hoverImages[0]);

  const handleMouseOver = (index) => {
    setMainImg(hoverImages[index]);
    setActiveImg(index);
  };


  return (
    <div className="main-wrapper">
      <div className="container">
        <div className="product-div">
          <div className="product-div-left">
            <div className="img-container">
              <img src={mainImg} alt="watch" />
            </div>
            <div className="hover-container">
              {hoverImages.map((image, index) => (
                <div key={index} onMouseOver={() => handleMouseOver(index)}>
                  <img src={image} alt={`watch ${index}`} />
                </div>
              ))}
            </div>
            <div className="btn-groups1">
              <button type="button" className="remove-btn">
                Remove
              </button>
              <button type="button" className="upload-btn">
                Upload
              </button>
            </div>
          </div>

          <div className="product-div-right">
            <label className="product-label">Product Name</label>
            <input type="text" className="product-name" defaultValue="(New) Analog Watch - For Men" />
            <label className="product-label">Product Price</label>
            <input type="text" className="product-price" defaultValue="$ 50.25" />

            <p className="product-description">
              <label className="product-label">Product Description</label>
              <textarea className="product-description-input">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae animi ad minima veritatis dolore.
                Architecto facere dignissimos voluptate fugit ratione molestias quis quidem exercitationem voluptas.
              </textarea>
            </p>
            <div className="btn-groups">
              <button type="button" className="buy-now-btn">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
