import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import "../styles/contacts.css";
import axios from "axios";
function Contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [alert, setAlert] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log();
    const user = await axios.post("/contact", form);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };
  return (
    <div className="contacts" style={{ marginTop: "76px" }}>
      <Container>
        {alert && (
          <div class="alert alert-success" role="alert">
            <strong>DETAIL'S SAVED !!</strong> we will contact you asap!!
          </div>
        )}
        <Grid container spacing={4}>
          <Grid className="contactForm" item xs={12} sm={6} md={4}>
            <form id="msform" onSubmit={handleSubmit}>
              <fieldset>
                <h2 className="fs-title">Contact Us</h2>
                {/* <h3 className="fs-subtitle">We will contact you asap</h3> */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="address"
                  placeholder="Address"
                  value={form.address}
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
          </Grid>
          <Grid item xs={12} sm={6} md={4} className="contactForm">
            <div style={{ textAlign: "center" }}>
              <img src="https://img.icons8.com/ios-glyphs/60/000000/phone--v1.png"></img>
              <p style={{ fontSize: "25px" }}>+91-7093882607, +91-7097938570</p>
              <br />
              <img src="https://img.icons8.com/metro/52/000000/marker.png"></img>
              <p style={{ fontSize: "25px" }}>
                <b>7 Cows PVT. LTD. </b>
              </p>
              <p>
                Kukatpally
                <br />
                Telangana-500062.
              </p>
              <div>
                <h3>
                  <img src="https://img.icons8.com/metro/26/000000/filled-message.png" />{" "}
                  : 7cowsorganics@gmail.com
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
