import React from "react";
import Slider from "react-slick";

//Component
import GifCard from "../GifCard/GifCard.component";

const GifCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <GifCard
          image="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
          title="Viktoria Bolonina"
          subtitle="@viktoriaphotographs"
        />
        <GifCard
          image="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
          title="Viktoria Bolonina"
          subtitle="@viktoriaphotographs"
        />
        <GifCard
          image="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
          title="Viktoria Bolonina"
          subtitle="@viktoriaphotographs"
        />
        <GifCard
          image="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
          title="Viktoria Bolonina"
          subtitle="@viktoriaphotographs"
        />
        <GifCard
          image="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
          title="Viktoria Bolonina"
          subtitle="@viktoriaphotographs"
        />
        <GifCard
          image="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
          title="Viktoria Bolonina"
          subtitle="@viktoriaphotographs"
        />
      </Slider>
    </>
  );
};

export default GifCarousel;
