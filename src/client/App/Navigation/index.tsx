import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useTheme from '@material-ui/core/styles/useTheme';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';
import CattleIcon from '../../assets/icons/CattleIcon';
import PoultryIcon from '../../assets/icons/PoultryIcon';
import SwineIcon from '../../assets/icons/SwineIcon';
import useLayoutStyles from '../../theme/useLayoutStyles';
import NavigationItem from './NavigationItem';

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
        <NavigationItem text="Home" icon={<HomeIcon />} />
        <NavigationItem text="Swine" icon={<SwineIcon />} />
        <NavigationItem text="Poultry" icon={<PoultryIcon />} />
        <NavigationItem text="Cattle" icon={<CattleIcon />} />
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
