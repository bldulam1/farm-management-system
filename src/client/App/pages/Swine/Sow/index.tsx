import Container from '@material-ui/core/Container';
import React from 'react';

import NavigationFrame from '../../../NavigationFrame';
import SowForm from './SowForm';

export default () => (
  <NavigationFrame>
    <Container maxWidth="sm">
      <SowForm />
    </Container>
  </NavigationFrame>
);
