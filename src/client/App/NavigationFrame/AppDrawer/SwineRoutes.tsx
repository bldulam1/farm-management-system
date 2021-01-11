import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import React from 'react';
import useLayoutStyles from '../../../theme/useLayoutStyles';
import NavigationItem from './NavigationItem';

export default function SwineRoutes() {
  const classes = useLayoutStyles();
  return (
    <List>
      <NavigationItem
        text="Hog Fattening"
        link="/swine/hogs"
        icon={
          <Avatar classes={{ colorDefault: classes.swineAvatar }}>H</Avatar>
        }
      />
      <NavigationItem
        text="Sow"
        link="/swine/sow"
        icon={
          <Avatar classes={{ colorDefault: classes.swineAvatar }}>S</Avatar>
        }
      />
      <NavigationItem
        text="Boar"
        link="/swine/boar"
        icon={
          <Avatar classes={{ colorDefault: classes.swineAvatar }}>B</Avatar>
        }
      />
    </List>
  );
}
