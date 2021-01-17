import { QueryResult } from '@apollo/client';
import { createContext, Dispatch, SetStateAction } from 'react';

import { GetSowsQuery } from '../../../../queries/autogenerate/operations';

interface PageState {
  offset: number;
  limit: number;
}

export interface SowContextInterface {
  query?: QueryResult<GetSowsQuery>;
  page?: PageState;
  setPage?: Dispatch<SetStateAction<PageState>>
}

export const SowContext = createContext<SowContextInterface>({});
