import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DisplayComponent = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cardData = [
    { id: 1, title: "Card 1", imgUrl: "https://example.com/image1.jpg" },
    { id: 2, title: "Card 2", imgUrl: "https://example.com/image2.jpg" },
    { id: 3, title: "Card 3", imgUrl: "https://example.com/image3.jpg" },
  ];

  return (
    <div className="flex flex-col justify-center">
      <h2>Display Component</h2>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 gap-4">
          <Slider {...settings}>
            {cardData.map((card) => (
              <div key={card.id} className="card" style={{ margin: "0 5px" }}>
                <img
                  src={card.imgUrl}
                  alt={card.title}
                  className="w-full h-[200px]"
                />
                <h3>{card.title}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default DisplayComponent;
