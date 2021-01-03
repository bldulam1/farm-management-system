import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useLayoutStyles from '../../../theme/useLayoutStyles';

export default function NavigationItem(props: NavigationItemProps) {
  const { text, icon, link } = props;
  const { nested } = props;
  const location = useLocation();
  const classes = useLayoutStyles();

  const isActive = new RegExp(link, 'i').test(location.pathname);

  return (
    <ListItem
      button
      key={text}
      component={Link}
      to={link}
      selected={isActive}
      className={nested ? classes.nested : undefined}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}

interface NavigationItemProps {
  text: string;
  link: string;
  icon: JSX.Element;
  nested?: boolean;
}

NavigationItem.defaultProps = {
  nested: false,
};
