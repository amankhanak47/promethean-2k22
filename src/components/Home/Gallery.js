import React from "react";
import { gallery_imgs } from "../../data";
function Gallery() {
  return (
    <section id="gallery" className="wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h2>Gallery</h2>
          <p>Check our gallery from the recent events</p>
        </div>
      </div>

      <div className="owl-carousel gallery-carousel">
        {gallery_imgs.map((i) => (
           <a href={i} className="venobox" data-gall="gallery-carousel">
          <img src={i}  alt="promethean2k22" loading="lazy"  />
        </a>
        ))}
       
      </div>
    </section>
  );
}

export default Gallery;
