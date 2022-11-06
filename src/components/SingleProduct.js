import React, { useState, useRef } from "react";
import { useMemo } from "react";
import { productData, productFruits } from "../DB/data";
import { useParams } from "react-router-dom";
import { data } from "../DB/data";
import { Row, Col, Card, Button } from "react-bootstrap";
import "../styles/contacts.css";
export default function SingleProduct() {
  const { name } = useParams();
  const ele = useRef();
  const ele2 = useRef();
  const [disable, setDisable] = useState(false);
  const [alert, setAlert] = useState(false);
  const arr = useMemo(() => {
    const obj = {
      ...data.find((obj) => obj.Varitey === name.trim()),
    };
    return {
      ...obj,
      url:
        obj.Catogery === "veggies"
          ? productData[Math.floor(Math.random() * 7)]
          : productFruits[Math.floor(Math.random() * 5)],
    };
  }, []);
  const [prod, setProd] = useState({
    name: "",
    phone: "",
    product: arr.Varitey,
    email: "",
    kg: "",
    address: "",
  });
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(prod);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };
  const handleChange = (evt) => {
    setProd({ ...prod, [evt.target.name]: evt.target.value });
    if (evt.target.name == "kg")
      ele.current.value = ele2.current.value * arr.sku + ` ${arr.Units}`;
  };
  const handleClick = () => {
    ele.current.value = 1 * arr.sku + ` ${arr.Units}`;
    setDisable(!disable);
    ele2.current.value = 1;
    ele2.current.focus();
  };
  return (
    <div>
      <div className="container">
        {alert && (
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>Details Saved !!</strong> We Will Contact You As Soon as
            Possible ..
          </div>
        )}
        <Row>
          <Col md={8} s={5}>
            <Card style={{ marginTop: "35px" }} className="product-card">
              <Card.Img
                variant="top"
                src={arr.url}
                style={{ objectFit: "contain" }}
              />
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
                    ? "Fruits and vegetables contain important vitamins, minerals and plant chemicals. They also contain fibre. There are many varieties of fruit and vegetables available "
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
            <form id="msform" onSubmit={handleSubmit}>
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
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={prod.phone}
                  onChange={handleChange}
                  required
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
                  required
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
                  required
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
