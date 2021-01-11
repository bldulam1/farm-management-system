// @ts-nocheck
import { Resolvers } from '../models';
import {
  countDocs,
  createDoc,
  deleteDocs,
  findDocById,
  findDocs,
  updateDoc,
} from './resolver.utils';
import {
  BoarModel,
  EmployeeModel,
  HogModel,
  SowModel,
} from '../schema/mongoose.schemas';
import {
  BirthRecordModel,
  HealthRecordModel,
} from '../schema/mongoose-schemas/supplier.schema';

const resolvers: Resolvers = {
  Query: {
    // Sow
    sow: (_, args) => findDocById(SowModel, args.id),
    sows: (_, args) => findDocs(SowModel, args),
    sowsCount: (_, args) => countDocs(SowModel, args.filter),

    // Hog
    hog: (_, args) => findDocById(HogModel, args.id),
    hogs: (_, args) => findDocs(HogModel, args),
    hogsCount: (_, args) => countDocs(HogModel, args.filter),

    // Boar
    boar: (_, args) => findDocById(BoarModel, args.id),
    boars: (_, args) => findDocs(BoarModel, args),
    boarsCount: (_, args) => countDocs(BoarModel, args.filter),

    // Employee
    employee: (_, args) => findDocById(EmployeeModel, args.id),
    employees: (_, args) => findDocs(EmployeeModel, args),
    employeesCount: (_, args) => countDocs(EmployeeModel, args.filter),

    // Birth Records
    birthRecord: (_, args) => findDocById(BirthRecordModel, args.id),
    birthRecords: (_, args) => findDocs(BirthRecordModel, args),
    birthRecordsCount: (_, args) => countDocs(BirthRecordModel, args.filter),
  },
  Mutation: {
    // Sow
    sowCreate: (_, args) => createDoc(SowModel, args.input),
    sowUpdate: (_, args) => updateDoc(SowModel, args.id, args.input),
    sowsDelete: (_, args) => deleteDocs(SowModel, args.id, args.ids),

    // Hog
    hogCreate: (_, args) => createDoc(HogModel, args.input),
    hogUpdate: (_, args) => updateDoc(HogModel, args.id, args.input),
    hogsDelete: (_, args) => deleteDocs(HogModel, args.id, args.ids),

    // Boar
    boarCreate: (_, args) => createDoc(BoarModel, args.input),
    boarUpdate: (_, args) => updateDoc(BoarModel, args.id, args.input),
    boarsDelete: (_, args) => deleteDocs(BoarModel, args.id, args.ids),

    // Employee
    employeeCreate: (_, args) => createDoc(EmployeeModel, args.input),
    employeeUpdate: (_, args) => updateDoc(EmployeeModel, args.id, args.input),
    employeesDelete: (_, args) => deleteDocs(EmployeeModel, args.id, args.ids),

    // Birth Records
    birthRecordCreate: (_, args) => createDoc(BirthRecordModel, args.input),
    birthRecordUpdate: (_, args) =>
      updateDoc(BirthRecordModel, args.id, args.input),
    birthRecordsDelete: (_, args) =>
      deleteDocs(BirthRecordModel, args.id, args.ids),

    healthRecordCreate: (_, args) => createDoc(HealthRecordModel, args.input),
    healthRecordUpdate: (_, args) =>
      updateDoc(HealthRecordModel, args.id, args.input),
  },
};

export default resolvers;
