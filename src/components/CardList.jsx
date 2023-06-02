import React from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";

export default function CardList() {
  <div className="flex flex-wrap">
    <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
      <Card>
        <img
          className="max-w-full h-auto md:h-48"
          src="https://res.cloudinary.com/beloved/image/upload/v1608683063/Assets/lamborghini_mxb2j7.jpg"
          alt="Bugatti"
        />
        <CardBody>
          <CardTitle className="text-lg">Lamborghini</CardTitle>
          <CardText>
            Joe made the sugar cookies; Susan decorated them. When motorists
            sped in and out of traffic.
          </CardText>
          <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">
            View Details
            <BsArrowRightSquareFill />
          </a>
        </CardBody>
      </Card>
    </div>
    <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
      <Card>
        <img
          className="max-w-full h-auto md:h-48"
          src="https://res.cloudinary.com/beloved/image/upload/v1608683147/Assets/bugatti-cars-7-free-car-hd-wallpaper_j4xyj6.jpg"
          alt="Bugatti"
        />
        <CardBody>
          <CardTitle className="text-lg">Bugatti</CardTitle>
          <CardText>
            Joe made the sugar cookies; Susan decorated them. When motorists
            sped in and out of traffic.
          </CardText>
          <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">
            View Details
            <BsArrowRightSquareFill />
          </a>
        </CardBody>
      </Card>
    </div>
    <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
      <Card>
        <img
          className="max-w-full h-auto md:h-48"
          src="https://res.cloudinary.com/beloved/image/upload/v1599343428/Assets/3_znyzrd.jpg"
          alt="blog"
        />
        <CardBody>
          <CardTitle className="text-lg">Computer</CardTitle>
          <CardText>
            Joe made the sugar cookies; Susan decorated them. When motorists
            sped in and out of traffic.
          </CardText>
          <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">
            View Details
            <BsArrowRightSquareFill />
          </a>
        </CardBody>
      </Card>
    </div>
  </div>;

  /* Logic */

  const style = {
    card: `relative flex flex-col border-2 border-gray-200 rounded-lg`,
    cardBody: `block flex-grow flex-shrink p-5`,
    cardTitle: `font-medium text-gray-700 mb-3`,
    cardText: `text-gray-500`,
  };

  const inlineStyle = {
    boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
  };

  function Card({ children }) {
    return (
      <div className={style.card} style={inlineStyle}>
        {children}
      </div>
    );
  }

  function CardBody({ children }) {
    return <div className={style.cardBody}>{children}</div>;
  }

  function CardTitle({ children }) {
    return <div className={style.cardTitle}>{children}</div>;
  }

  function CardText({ children }) {
    return <div className={style.cardText}>{children}</div>;
  }
}
