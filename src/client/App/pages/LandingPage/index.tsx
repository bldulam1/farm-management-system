import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import BusinessCard from './BusinessCard';
import useLandingPageStyles from './useLandingPageStyles';

export default () => {
  const classes = useLandingPageStyles();

  const thisYear = new Date().getFullYear();

  return (
    <>
      <Container maxWidth="md" className={classes.hero}>
        <Typography variant="h2" align="center" color="primary">
          Farm Management System
        </Typography>
        <br />
        <Typography variant="subtitle1" align="center">
          Our livestocks are our livelihood. Caring for our animals and putting
          their welfare first is not only the right thing to do, it makes good
          business sense.
        </Typography>
      </Container>

      <section className={classes.gallery}>
        <Container className={classes.galleryContainer}>
          <Grid container spacing={2} alignItems="center">
            <BusinessCard
              title="Swine"
              src="https://images.unsplash.com/photo-1534606067099-6fb45f4d4058?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            />
            <BusinessCard
              title="Poultry"
              src="https://images.unsplash.com/photo-1556316918-880f9e893822?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            />
            <BusinessCard
              title="Cattle"
              src="https://images.unsplash.com/photo-1504867896968-1aced9bb5030?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            />
          </Grid>
        </Container>
      </section>

      <section className={classes.footer}>
        <Typography>{`Copyright © Dulam Farms ${thisYear}`}</Typography>
      </section>
    </>
  );
};
