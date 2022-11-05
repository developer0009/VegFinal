// import { React } from "react";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import "../styles/contacts.css";

function Contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    required: "",
  });
  const handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  return (
    <div className="contacts">
      <Container>
        <Grid container spacing={4}>
          <Grid className="contactForm" item xs={12} sm={6} md={4}>
            <form id="msform">
              <fieldset>
                <h2 className="fs-title">Send Product Details</h2>
                <h3 className="fs-subtitle">We will contact you asap</h3>
                <input type="text" name="fname" placeholder="Name" />
                <input type="text" name="phone" placeholder="Phone" />
                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="product" placeholder="Product Name" />
                <textarea name="address" placeholder="Address"></textarea>
                <input
                  type="submit"
                  name="submit"
                  className="submit action-button"
                  value="Submit"
                />
              </fieldset>
            </form>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className="contactForm">
            <div style={{ textAlign: "center" }}>
              <img src="https://img.icons8.com/ios-glyphs/60/000000/phone--v1.png"></img>
              <p style={{ fontSize: "25px" }}>
                9063322283, 8019764115, 8008678047
              </p>
              <br />
              <img src="https://img.icons8.com/metro/52/000000/marker.png"></img>
              <p style={{ fontSize: "25px" }}>
                <b>7 Cows PVT. LTD. </b>
              </p>
              <p>
                Nagarjuna Nagar Colony, Road No. 4, Kushaiguda, ECIL, Hyderabad,
                <br />
                Telangana-500062.
              </p>
              <div>
                <h3>
                  <img src="https://img.icons8.com/metro/26/000000/filled-message.png" />{" "}
                  : contact@turtleled.com
                </h3>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Contacts;
