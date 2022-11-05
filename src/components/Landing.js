import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/landing.css";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  title: {
    textAlign: "center",
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Products() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Carousel
          // showArrows={false}
          showStatus={false}
          autoPlay={true}
          useKeyboardArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={2000}
          swipeScrollTolerance={10}
          dynamicHeight={true}
          verticalSwipe={"standard"}
          width={"100%"}
        >
          <div>
            <img
              style={{ background: "white" }}
              // src="https://images.unsplash.com/photo-1607528971899-2e89e6c0ec69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3Vyb3NlbCUyMHZlZ2V0YWJsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div>
            <img src="" />
          </div>
          <div>
            <img src="logo/logo3.jpg" />
          </div>
          <div>
            <img src="logo/logo5.jpg" />
          </div>
        </Carousel>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <a href="/coblights" className="pLink">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="images/COB1.jpg"
                    title="COB1"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      COB Lights
                    </Typography>
                    <div className="price all">
                      <span>&#x20b9; 645</span>

                      <Button
                        variant="outlined"
                        href="/contacts"
                        style={{ marginLeft: "25px" }}
                      >
                        Book Now
                      </Button>
                      {/* </span> */}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <a href="/domelights" className="pLink">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/dome1.jpg"
                    title="dome1"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      Dome Lights
                    </Typography>
                    <div className="price">
                      <span>&#x20b9; 550</span>

                      <Button
                        variant="outlined"
                        href="/contacts"
                        style={{ marginLeft: "25px" }}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <a href="/downlights" className="pLink">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/down1.jpg"
                    title="down1"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      Down Lights
                    </Typography>
                    <div className="price">
                      <span>&#x20b9; 525</span>

                      <Button
                        variant="outlined"
                        href="/contacts"
                        style={{ marginLeft: "25px" }}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <a href="/edgelights" className="pLink">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/edge1.jpg"
                    title="edge1"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      Edge Lights
                    </Typography>
                    <div className="price">
                      <span>&#x20b9; 525</span>

                      <Button
                        variant="outlined"
                        href="/contacts"
                        style={{ marginLeft: "25px" }}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <a href="/flameprooflights" className="pLink">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/flame1.jpg"
                    title="flame1"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      Flameproof Lights
                    </Typography>
                    <div className="price">
                      <span>&#x20b9; 525</span>

                      <Button
                        variant="outlined"
                        href="/contacts"
                        style={{ marginLeft: "25px" }}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <a href="/floodlights" className="pLink">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/flood1.jpg"
                    title="flood1"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      Flood Lights
                    </Typography>
                    <div className="price">
                      <span>&#x20b9; 525</span>

                      <Button
                        variant="outlined"
                        href="/contacts"
                        style={{ marginLeft: "25px" }}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <a href="/gardenlights" className="pLink">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/garden1.jpg"
                    title="garden1"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      Garden Lights
                    </Typography>
                    <div className="price">
                      <span>&#x20b9; 525</span>

                      <Button
                        variant="outlined"
                        href="/contacts"
                        style={{ marginLeft: "25px" }}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <a href="/panellights" className="pLink">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/panel1-2.jpg"
                    title="panel1-2"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      Panel Lights
                    </Typography>
                    <div className="price">
                      <span>&#x20b9; 525</span>

                      <Button
                        variant="outlined"
                        href="/contacts"
                        style={{ marginLeft: "25px" }}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <a href="/spotlights" className="pLink">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/spot1.jpg"
                    title="spot1"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      Spot Lights
                    </Typography>
                    <div className="price">
                      <span>&#x20b9; 525</span>

                      <Button
                        variant="outlined"
                        href="/contacts"
                        style={{ marginLeft: "25px" }}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <a href="/streetlights" className="pLink">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/street1.jpg"
                    title="street1"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      Street Lights
                    </Typography>
                    <div className="price">
                      <span>&#x20b9; 525</span>

                      <Button
                        variant="outlined"
                        href="/contacts"
                        style={{ marginLeft: "25px" }}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <a href="/tracklights" className="pLink">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/track1.jpg"
                    title="track1"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      Track Lights
                    </Typography>
                    <div className="price">
                      <span>&#x20b9; 525</span>

                      <Button
                        variant="outlined"
                        href="/contacts"
                        style={{ marginLeft: "25px" }}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <a href="/tubelights" className="pLink">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/tube1.jpg"
                    title="tube1"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      Tube Lights
                    </Typography>
                    <div className="price">
                      <span>&#x20b9; 525</span>

                      <Button
                        variant="outlined"
                        href="/contacts"
                        style={{ marginLeft: "25px" }}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <a href="/underwaterlights" className="pLink">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/under2.jpg"
                    title="under2"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      UnderWater Lights
                    </Typography>
                    <div className="price">
                      <span>&#x20b9; 525</span>

                      <Button
                        variant="outlined"
                        href="/contacts"
                        style={{ marginLeft: "25px" }}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
