import { Document, Model } from 'mongoose';
import { Filter, Sort } from '../models';

export const getSkipLimit = (props: { limit?: number; offset?: number }) => ({
  limit: props.limit,
  skip: props.offset,
});

export const getFilter = (filter?: Filter) => {
  if (filter) {
    return { [filter.key]: filter.value };
  }
  return {};
};

export const getIdsQuery = (id?: string, ids?: string[]) => ({
  _id: {
    $in: [id, ...(ids || [])].filter((s) => !!s),
  },
});

type ModelDocumentAny = Model<Document<any>>;

export const findDocById = (model: ModelDocumentAny, id: string) =>
  model.findById(id);

export const findDocs = (
  model: ModelDocumentAny,
  args: { filter?: Filter; limit?: number; offset?: number; sort?: Sort },
) =>
  model.find(getFilter(args.filter), null, {
    limit: args.limit,
    skip: args.offset,
  });

export const createDoc = (model: ModelDocumentAny, input: any) =>
  model.create(input).then((r) => model.findById(r._id));

export const updateDoc = (model: ModelDocumentAny, id: string, input: any) =>
  model.findByIdAndUpdate(id, { $set: input });

export const deleteDocs = (
  model: ModelDocumentAny,
  id?: string,
  ids?: string[],
) => model.deleteMany(getIdsQuery(id, ids));

export const countDocs = (model: ModelDocumentAny, filter?: Filter) =>
  model.countDocuments(getFilter(filter));
