import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { useContext } from 'react';

import useLayoutStyles from '../../theme/useLayoutStyles';
import { AppContext } from '../App.Context';
import AppDrawer from './AppDrawer';

export default function (props: { children: JSX.Element | JSX.Element[] }) {
  const classes = useLayoutStyles();

  const ctx = useContext(AppContext);
  const open = ctx.state.drawerOpen;

  const handleDrawerOpen = () => {
    ctx.setState((s) => ({ ...s, drawerOpen: true }));
  };

  const handleDrawerClose = () => {
    ctx.setState((s) => ({ ...s, drawerOpen: false }));
  };

  const { children } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dulam Farms
          </Typography>
        </Toolbar>
      </AppBar>
      <AppDrawer open={open} onClose={handleDrawerClose} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
}
