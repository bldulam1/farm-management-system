import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  scalar DateTime

  type Query {
    sow(id: ID!): Sow
    sows(offset: Int, limit: Int, filter: Filter, sort: Sort): [Sow!]!
    sowsCount(filter: Filter): Int!

    hog(id: ID!): Hog
    hogs(offset: Int, limit: Int, filter: Filter, sort: Sort): [Hog!]!
    hogsCount(filter: Filter): Int!

    boar(id: ID!): Boar
    boars(offset: Int, limit: Int, filter: Filter, sort: Sort): [Boar!]!
    boarsCount(filter: Filter): Int!

    employee(id: ID!): Employee
    employees(offset: Int, limit: Int, filter: Filter, sort: Sort): [Employee!]!
    employeesCount(filter: Filter): Int!

    birthRecord(id: ID!): BirthRecord
    birthRecords(
      offset: Int
      limit: Int
      filter: Filter
      sort: Sort
    ): [BirthRecord!]!
    birthRecordsCount(filter: Filter): Int!
  }

  type Mutation {
    sowCreate(input: SowInput!): Sow!
    sowUpdate(id: ID!, input: SowInput!): Sow!
    sowsDelete(id: ID, ids: [ID!]): Int

    hogCreate(input: HogInput!): Hog!
    hogUpdate(id: ID!, input: HogInput!): Hog!
    hogsDelete(id: ID, ids: [ID!]): Int

    boarCreate(input: BoarInput!): Boar!
    boarUpdate(id: ID!, input: BoarInput!): Boar!
    boarsDelete(id: ID, ids: [ID!]): Int

    employeeCreate(input: EmployeeInput!): Employee!
    employeeUpdate(id: ID!, input: EmployeeInput!): Employee!
    employeesDelete(id: ID, ids: [ID!]): Int

    birthRecordCreate(input: BirthRecordInput!): ID
    birthRecordUpdate(id: ID!, input: BirthRecordInput!): BirthRecord!
    birthRecordsDelete(id: ID, ids: [ID!]): Int

    vaccinationRecordCreate(input: VaccinationInput!): ID
    vaccinationRecordUpdate(
      id: ID!
      input: VaccinationInput!
    ): VaccinationRecord!
    vaccinationRecordsDelete(id: ID, ids: [ID!]): Int

    healthRecordCreate(input: HealthRecordInput!): ID
    healthRecordUpdate(id: ID!, input: HealthRecordInput!): HealthRecord!
    healthRecordsDelete(id: ID, ids: [ID!]): Int
  }

  enum SortValue {
    ASCs
    DESC
  }

  input Sort {
    key: String
    value: SortValue
  }

  input Filter {
    key: String!
    value: String!
    or: [Filter]
    and: [Filter]
  }

  enum GenerationEnum {
    PARENT_STOCK
    F1
  }
  type Sow {
    _id: ID!
    tag: String!
    birthDate: DateTime!
    breed: String!
    generation: GenerationEnum!
    isImported: Boolean!
    purchaseDate: DateTime
    supplier: Supplier
    birthRecords: [BirthRecord!]!
    vaccinationRecords: [VaccinationRecord!]!
    sizeRecords: [SizeRecord!]!
    weightRecords: [WeightRecord!]!
    healthRecords: [HealthRecord!]!
  }
  input SowInput {
    tag: String!
    birthDate: DateTime!
    breed: String!
    generation: GenerationEnum!
    isImported: Boolean!
    purchaseDate: DateTime
    supplierId: ID
  }

  type Boar {
    tag: String!
    birthDate: DateTime!
    breed: String!
    isImported: Boolean!
    purchaseDate: DateTime
    supplier: Supplier
    vaccinationRecords: [VaccinationRecord!]!
    sizeRecords: [SizeRecord!]!
    weightRecords: [WeightRecord!]!
    healthRecords: [HealthRecord!]!
  }
  input BoarInput {
    tag: String!
    birthDate: DateTime!
    breed: String!
    isImported: Boolean!
    purchaseDate: DateTime
    supplierId: ID
  }

  type Hog {
    _id: ID!
    tag: String!
    birtRecord: BirthRecord!
    parentSow: Sow!
    parentBoar: Boar!
    birthDate: DateTime!
    vaccinationRecords: [VaccinationRecord!]!
    sizeRecords: [SizeRecord!]!
    weightRecords: [WeightRecord!]!
    healthRecords: [HealthRecord!]!
  }
  input HogInput {
    tag: String!
    birthDate: DateTime!
    birtRecordId: ID!
    parentSowId: ID!
    parentBoarId: ID!
  }

  type SizeRecord {
    _id: ID!
    lengthCm: Float!
    girthCm: Float!
    date: DateTime!
    recorder: Employee!
    measuredBy: Employee!
  }
  input SizeRecordInput {
    pigId: ID!
    lengthCm: Float!
    girthCm: Float!
    date: DateTime!
    recorderId: ID!
    measuredById: ID!
  }

  type WeightRecord {
    _id: ID!
    weightKg: Float!
    date: DateTime!
    recorder: Employee!
    measuredBy: Employee!
  }
  input WeightRecordInput {
    pigId: ID!
    weightKg: Float!
    date: DateTime!
    recorderId: ID!
    measuredById: ID!
  }

  type VaccinationRecord {
    _id: ID!
    vaccineName: String!
    quantity: Float!
    unit: String!
    adminiteredBy: Employee!
    recorder: Employee!
  }
  input VaccinationInput {
    pigId: ID!
    vaccineName: String!
    quantity: Float!
    unit: String!
    administeredById: ID!
    recorderId: ID!
  }

  type BirthRecord {
    sow: Sow!
    boar: Boar
    laborStart: DateTime!
    laborEnd: DateTime!
    alivePigletsCount: Int!
    stillBornCount: Int!
    attendant: Employee!
    recorder: Employee!
  }
  input BirthRecordInput {
    sowId: ID!
    boarId: ID!
    laborStart: DateTime!
    laborEnd: DateTime!
    alivePigletsCount: Int!
    stillBornCount: Int!
    attendantId: ID!
    recorderId: ID!
  }

  type HealthRecord {
    _id: ID!
    date: DateTime!
    description: String!
    actionTaken: String!
    recorder: Employee!
  }
  input HealthRecordInput {
    pigId: ID!
    date: DateTime!
    description: String!
    actionTaken: String!
    recorderId: ID!
  }

  type Employee {
    _id: ID!
    givenName: String!
    middleName: String
    surname: String!
    address: String!
    contactNumber: String!
    birthDate: DateTime!
    startDate: DateTime!
    endDate: DateTime
  }
  input EmployeeInput {
    givenName: String!
    middleName: String
    surname: String!
    address: String!
    contactNumber: String!
    birthDate: DateTime!
    startDate: DateTime!
  }

  type Supplier {
    id: ID
    companyName: String!
    contactPerson: String!
    contactNumber: String!
    address: String!
  }
  input SupplierInput {
    companyName: String!
    contactPerson: String!
    contactNumber: String!
    address: String!
  }
`;

export default typeDefs;
