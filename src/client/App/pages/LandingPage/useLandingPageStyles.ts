import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
  hero: {
    minHeight: '40vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  gallery: {
    backgroundColor: theme.palette.background.paper,
  },
  galleryContainer: {
    minHeight: '40vh',
    display: 'flex',
  },
  media: {
    height: 140,
  },
  footer: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
}));
