import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import useTheme from '@material-ui/core/styles/useTheme';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import { Route } from 'react-router-dom';
import CattleIcon from '../../../assets/icons/CattleIcon';
import PoultryIcon from '../../../assets/icons/PoultryIcon';
import SwineIcon from '../../../assets/icons/SwineIcon';
import useLayoutStyles from '../../../theme/useLayoutStyles';
import NavigationItem from './NavigationItem';
import SwineRoutes from './SwineRoutes';

interface AppNavigationProps {
  open: boolean;
  onClose: () => void;
}

export default (props: AppNavigationProps) => {
  const classes = useLayoutStyles();
  const theme = useTheme();

  const { open, onClose } = props;

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={onClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <NavigationItem
          text="Home"
          link="/home"
          icon={<HomeIcon color="primary" />}
        />
        <NavigationItem text="Swine" link="/swine" icon={<SwineIcon />} />
        <NavigationItem text="Poultry" link="/poultry" icon={<PoultryIcon />} />
        <NavigationItem text="Cattle" link="/cattle" icon={<CattleIcon />} />
      </List>
      <Divider />

      <Route path="/swine">
        <SwineRoutes />
      </Route>
    </Drawer>
  );
};
