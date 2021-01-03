import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationItemProps {
  text: string;
  icon: JSX.Element;
}

export default (props: NavigationItemProps) => {
  const { text, icon } = props;
  const location = useLocation();

  const link = `/${text.toLowerCase()}`;
  const isActive = new RegExp(link, 'i').test(location.pathname);

  return (
    <ListItem button key={text} component={Link} to={link} selected={isActive}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};
