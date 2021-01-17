import Container from '@material-ui/core/Container';
import React, { useState } from 'react';

import { useGetSowsQuery } from '../../../../queries/autogenerate/hooks';
import NavigationFrame from '../../../NavigationFrame';
import { SowContext } from './Sow.Context';
import SowTable from './SowTable';

export default () => {
  const [page, setPage] = useState({
    offset: 0,
    limit: 10,
  });

  const sowQuery = useGetSowsQuery({
    variables: { ...page },
  });

  return (
    <NavigationFrame>
      <Container maxWidth="md">
        <SowContext.Provider value={{ query: sowQuery, page, setPage }}>
          <SowTable />
        </SowContext.Provider>
      </Container>
    </NavigationFrame>
  );
};
