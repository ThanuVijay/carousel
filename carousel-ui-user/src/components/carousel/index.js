import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CarouselCom({ Slides, Infinite }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3600/api/carousel")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Function to group data into arrays of 3 items per carousel
  function chunkArray(arr, chunkSize) {
    const groups = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      groups.push(arr.slice(i, i + chunkSize));
    }
    return groups;
  }

  const chunkedData = chunkArray(data, 3);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space",
      }}
    >
      {chunkedData.map((carouselItems, index) => (
        <Card key={index} style={{ width: "200px" }}>
          <Card.Body>
            <Carousel key={index} fade>
              {carouselItems.map((item) => (
                <Carousel.Item key={item.id} style={{ height: "200px" }}>
                  <img
                    className="d-block w-100"
                    src={item.imageURL}
                    alt="Carousel slide"
                    style={{ height: "200px" }}
                  />
                  <Carousel.Caption>
                    <h2>{item.price}</h2>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
            <Card.Title>{carouselItems[0].title}</Card.Title>
            <Card.Text>{carouselItems[0].about}</Card.Text>
            <Button variant="primary">Buy This</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CarouselCom;
