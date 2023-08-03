// ** React Import
import React from "react";
import { useState } from "react";
import axios from "axios";

// ** React Bootstrap Import
import Carousel from "react-bootstrap/Carousel";

function CarouselCom({Slides, Infinite}) {
  const [data, setData] = useState("");

  axios
    .get("http://localhost:3600/api/carousel")
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <Carousel fade>
      {data
        ? data.slice(0, Slides).map((item) => (
            <Carousel.Item style={{ height: "600px" }} key={item.id}>
              <img
                className="d-block w-100"
                src={item.imageURL}
                alt="First slide"
                style={{ height: "600px" }}
              />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>
                  {item.subTitle}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        : null}
    </Carousel>
  );
}

export default CarouselCom;
