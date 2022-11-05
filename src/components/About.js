import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function Contacts() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <div>
          <img
            src="logo/Logo_Revision.png"
            alt=""
            // align="left"
            style={{
              width: "100%",
            }}
          />

          <h1 style={{ textAlign: "center" }}>About the Company</h1>
          <br />
          <div>
            <p>
              7 cows organics is an <mark>authentic/guarantee</mark> of Organic
              Living. We at 7cows offer pure organic fruits & Vegetables,
              grocery, beauty, health, and wellness products for your organic
              lifestyle. 7cows encourages customers to take control of their
              health and eat nutritious food grown without the use of synthetic
              chemicals. We provide farm visits on every month the fourth
              Saturday.
            </p>
            <p>
              It’s time to save our health along with our wealth. Try Authentic,
              Traditional Organics food Items. Get original Organic Products
              Delivered to Your Door. Zero Chemicals, Transparent & Fairly
              Priced. Our group of farmers came together as green organic soil
              (FPO) based on different parts of Telangana.
            </p>
            <p>
              As a Brand, We Focus on Promoting Organic & Sustainable
              Lifestyles. We Connect our organic farmers To Buyers Online. "We
              Emphasize On Generating Wealth For Farmers And Health For Buyers"
              by Commercializing The Seed Sown And By Distributing the Food
              Grown.
              <br /> Any Products Of Ours Does Not Involve Adulteration, It
              Avoids The Use Of Synthetic Pesticides, Chemical Fertilizers Or
              Any Preservatives So, Let's Join Hands In this Promoting Healthy
              Living By Buying Organically Grown Food Thus Bringing Wealth To
              Farmers & Organic Food To Buyers
            </p>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
