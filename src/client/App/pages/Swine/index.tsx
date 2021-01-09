import { TextField } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';

import Frame from '../../NavigationFrame';

export default () => (
  <Frame>
    <Container maxWidth="sm">
      <form>
        <TextField fullWidth label="Name" />
      </form>
    </Container>
  </Frame>
);
