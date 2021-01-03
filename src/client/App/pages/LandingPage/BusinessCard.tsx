import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useLandingPageStyles from './useLandingPageStyles';

export default (props: { title: string; src: string }) => {
  const { title, src } = props;
  const classes = useLandingPageStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${title.toLowerCase()}`);
  };

  return (
    <Grid item xs={12} md={4}>
      <Card variant="outlined">
        <CardActionArea onClick={handleClick}>
          <CardMedia className={classes.media} image={src} />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
