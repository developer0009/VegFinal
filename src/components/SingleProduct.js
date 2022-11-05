import React, { useState, useRef } from "react";
import { useMemo } from "react";
import { productData } from "../DB/data";
import { useParams } from "react-router-dom";
import { data } from "../DB/data";
import { Row, Col, Card, Button } from "react-bootstrap";
import "../styles/contacts.css";
export default function SingleProduct() {
  const { name } = useParams();
  const ele = useRef();
  const ele2 = useRef();
  const [disable, setDisable] = useState(false);
  const arr = useMemo(() => {
    return {
      ...data.find((obj) => obj.Varitey === name.trim()),
      url: productData[Math.floor(Math.random() * 7)],
    };
  }, []);
  //in react memeo dependency is very important
  const [prod, setProd] = useState({
    name: "",
    phone: "",
    product: arr.Varitey,
    email: "",
    kg: "",
    address: "",
  });
  const handleChange = (evt) => {
    setProd({ ...prod, [evt.target.name]: evt.target.value });
    if (evt.target.name == "kg")
      ele.current.value = ele2.current.value * arr.sku + ` ${arr.Units}`;
  };
  const handleClick = () => {
    ele.current.value = 1 * arr.sku + ` ${arr.Units}`;
    setDisable(!disable);
    ele2.current.value = 1;
  };

  return (
    <div>
      <div className="container ">
        <Row>
          <Col md={8} s={5}>
            <Card style={{ width: "30rem", marginTop: "35px" }}>
              <Card.Img variant="top" src={arr.url} />
              <Card.Body>
                <Card.Title className="text-center">
                  {arr.Varitey[0].toUpperCase() + arr.Varitey.substring(1)}
                </Card.Title>
                <Card.Text className="text-center">
                  {" "}
                  Quantity : {arr.sku} {arr.Units}
                </Card.Text>

                <Card.Text>
                  {!arr.Description
                    ? "Some quick example text to build on the card title and make up the bulk of the card's content."
                    : arr.Description}{" "}
                </Card.Text>
                <Button
                  variant="success"
                  onClick={handleClick}
                  disabled={disable}
                >
                  Add to Cart <i class="fa-solid fa-cart-shopping"></i>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <form id="msform">
              <fieldset>
                <h2 className="fs-title">
                  Buy <bold>{arr.Varitey}</bold>
                </h2>
                <h3 className="fs-subtitle">We will contact you asap</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={prod.name}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={prod.phone}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="product"
                  className="product"
                  placeholder="Product"
                  value={arr.Varitey}
                  disabled
                  readOnly
                />
                <input
                  type="text"
                  name="kg"
                  placeholder="0 quantity"
                  ref={ele}
                  disabled
                />
                <input
                  type="text"
                  name="kg"
                  placeholder="Enter quantity"
                  ref={ele2}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <textarea
                  name="address"
                  placeholder="Address"
                  onChange={handleChange}
                ></textarea>
                <input
                  type="submit"
                  name="submit"
                  className="submit action-button"
                  value="Submit"
                />
              </fieldset>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
}
