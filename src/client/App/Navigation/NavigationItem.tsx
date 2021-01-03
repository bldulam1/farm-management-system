import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationItemProps {
  text: string;
  icon: JSX.Element;
}

export default (props: NavigationItemProps) => {
  const { text, icon } = props;

  return (
    <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};
