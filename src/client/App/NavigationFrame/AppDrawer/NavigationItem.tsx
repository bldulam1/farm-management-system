import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavigationItem(props: NavigationItemProps) {
  const { text, icon, link } = props;
  const location = useLocation();

  const isActive = new RegExp(link, 'i').test(location.pathname);

  return (
    <ListItem button key={text} component={Link} to={link} selected={isActive}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}

interface NavigationItemProps {
  text: string;
  link: string;
  icon: JSX.Element;
}
