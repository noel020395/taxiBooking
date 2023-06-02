import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";

export default function CarFleet() {
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
  const[ carfleets, setCarFleets] = useState([])
  const carFleetData = [
    {
      id: 1,
      title: "Ninetendo",
      price: "$99",
      linkImg:
        "https://media.istockphoto.com/id/1444154100/vector/alien-spaceship-ufo-game-icons-vector-set.jpg?s=612x612&w=is&k=20&c=vf7125UnDayGl3Je8bJuRUXz1xJedmvfD3yp1jonX58=",
    },
    {
      id: 2,
      title: "Taekwon",
      price: "$100",
      linkImg:
        "https://media.istockphoto.com/id/1385384611/vector/sport-event-poster-design-background.jpg?s=612x612&w=0&k=20&c=RBps08PoibPiY2mWd_IEZi0Yg0xIHezjsghEahq2kbc=",
    },
    {
      id: 3,
      title: "box q",
      price: "$66",
      linkImg:
        "https://media.istockphoto.com/id/1438540726/photo/game-room-interior-with-modern-ambient-lights-and-powerful-supercomputers.jpg?s=612x612&w=0&k=20&c=6mr8q92j1cvZ-uNSIRTm-xOKQ6HV-W8iIFJ2AEtVECw=",
    },
    {
      id: 4,
      title: "box q",
      price: "$66",
      linkImg:
        "https://media.istockphoto.com/id/1401785093/photo/close-up-of-young-asian-woman-playing-online-smartphone-video-game-and-broadcast-streaming.jpg?s=2048x2048&w=is&k=20&c=eJmPuLxChxWL66Bv0DpdweQgRiosMX2mzmyJQww2NqM=",
    },
    {
      id: 5,
      title: "box ui",
      price: "$88",
      linkImg:
        "https://media.istockphoto.com/id/1266314973/photo/an-asian-chinese-group-of-teenage-boys-playing-mobile-game-in-the-basketball-court-after.jpg?s=2048x2048&w=is&k=20&c=F_9H-9XNYaHlujic_0-awqfZcU1vLo1j1GNghHVZwhs=",
    },
    {
      id: 6,
      title: "box q",
      price: "$66",
      linkImg:
        "https://media.istockphoto.com/id/1370511515/vector/the-next-planet-to-explore.jpg?s=2048x2048&w=is&k=20&c=1orsAdajYTXOvOqi7CKjlIIGHZ9pdOLEGSS51kSfrAQ=",
    },
    {
      id: 7,
      title: "box q",
      price: "$66",
      linkImg:
        "hhttps://media.istockphoto.com/id/1365328012/vector/video-media-player-on-laptop-screen.jpg?s=612x612&w=is&k=20&c=te6KHDuOhhEOA9QnH5UjzkpOAjuNAIwBUZQsnzDN1cw=",
    },
    {
      id: 8,
      title: "box c",
      price: "$199",
      linkImg:
        "https://media.istockphoto.com/id/1450132325/vector/icons-isolated-on-white-computer-devices-3d-render-vector-icon-set-computer-laptop.jpg?s=2048x2048&w=is&k=20&c=Un4cka-SZJthwWM_a43Tef47-5jpDu6EHLBBaLzsFmQ=",
    },
    {
      id: 9,
      title: "box e",
      price: "$13",
      linkImg:
        "https://media.istockphoto.com/id/1422751770/vector/laptop-computer-with-white-screen.jpg?s=2048x2048&w=is&k=20&c=tIbgHxQUPy0Tnhvi5GBsGHQqpv90LLX4IjcPLb4yHOg=",
    },
    {
      id: 10,
      title: "box d",
      price: "$11",
      linkImg:
        "https://media.istockphoto.com/id/1370511515/vector/the-next-planet-to-explore.jpg?s=2048x2048&w=is&k=20&c=1orsAdajYTXOvOqi7CKjlIIGHZ9pdOLEGSS51kSfrAQ=",
    },
  ];

  useEffect(() => {
    // 模拟从服务器获取车辆数据
    setTimeout(() => {
      setCarFleets(carFleetData);
    }, 2000);
  }, []);

  return (
    <div>
      <div className="text-white">
        <h2>Responsive</h2>
        {carFleetData.length === 0 ? (
          <p>Loading car fleets...</p>
        ) : (
          <Slider {...settings}>
            {carFleetData.map((item) => (
              <div
                className="card bg-[#f0f0f0] rounded-lg p-4 flex flex-col justify-between"
                key={item.id}
                style={{
                  width: "1028px", 
                  height: "963.50px",  
                }}
              >
                <div className="card-top flex flex-col items-center">
                  <img
                    src={item.linkImg}
                    alt={item.title}
                    className="max-w-96 h-auto object-cover rounded-sm overflow-hidden"
                  />
                  <h1 color="black">{item.title}</h1>
                </div>
                <div className="card-bottom text-center mt-[16px]">
                  <p color="black">{item.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}
