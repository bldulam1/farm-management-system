import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  sow?: Maybe<Sow>;
  sows: Array<Sow>;
  sowsCount: Scalars['Int'];
  hog?: Maybe<Hog>;
  hogs: Array<Hog>;
  hogsCount: Scalars['Int'];
  boar?: Maybe<Boar>;
  boars: Array<Boar>;
  boarsCount: Scalars['Int'];
  employee?: Maybe<Employee>;
  employees: Array<Employee>;
  employeesCount: Scalars['Int'];
  birthRecord?: Maybe<BirthRecord>;
  birthRecords: Array<BirthRecord>;
  birthRecordsCount: Scalars['Int'];
};

export type QuerySowArgs = {
  id: Scalars['ID'];
};

export type QuerySowsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  filter?: Maybe<Filter>;
  sort?: Maybe<Sort>;
};

export type QuerySowsCountArgs = {
  filter?: Maybe<Filter>;
};

export type QueryHogArgs = {
  id: Scalars['ID'];
};

export type QueryHogsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  filter?: Maybe<Filter>;
  sort?: Maybe<Sort>;
};

export type QueryHogsCountArgs = {
  filter?: Maybe<Filter>;
};

export type QueryBoarArgs = {
  id: Scalars['ID'];
};

export type QueryBoarsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  filter?: Maybe<Filter>;
  sort?: Maybe<Sort>;
};

export type QueryBoarsCountArgs = {
  filter?: Maybe<Filter>;
};

export type QueryEmployeeArgs = {
  id: Scalars['ID'];
};

export type QueryEmployeesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  filter?: Maybe<Filter>;
  sort?: Maybe<Sort>;
};

export type QueryEmployeesCountArgs = {
  filter?: Maybe<Filter>;
};

export type QueryBirthRecordArgs = {
  id: Scalars['ID'];
};

export type QueryBirthRecordsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  filter?: Maybe<Filter>;
  sort?: Maybe<Sort>;
};

export type QueryBirthRecordsCountArgs = {
  filter?: Maybe<Filter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  sowCreate: Sow;
  sowUpdate: Sow;
  sowsDelete?: Maybe<Scalars['Int']>;
  hogCreate: Hog;
  hogUpdate: Hog;
  hogsDelete?: Maybe<Scalars['Int']>;
  boarCreate: Boar;
  boarUpdate: Boar;
  boarsDelete?: Maybe<Scalars['Int']>;
  employeeCreate: Employee;
  employeeUpdate: Employee;
  employeesDelete?: Maybe<Scalars['Int']>;
  birthRecordCreate?: Maybe<Scalars['ID']>;
  birthRecordUpdate: BirthRecord;
  birthRecordsDelete?: Maybe<Scalars['Int']>;
  vaccinationRecordCreate?: Maybe<Scalars['ID']>;
  vaccinationRecordUpdate: VaccinationRecord;
  vaccinationRecordsDelete?: Maybe<Scalars['Int']>;
  healthRecordCreate?: Maybe<Scalars['ID']>;
  healthRecordUpdate: HealthRecord;
  healthRecordsDelete?: Maybe<Scalars['Int']>;
};

export type MutationSowCreateArgs = {
  input: SowInput;
};

export type MutationSowUpdateArgs = {
  id: Scalars['ID'];
  input: SowInput;
};

export type MutationSowsDeleteArgs = {
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type MutationHogCreateArgs = {
  input: HogInput;
};

export type MutationHogUpdateArgs = {
  id: Scalars['ID'];
  input: HogInput;
};

export type MutationHogsDeleteArgs = {
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type MutationBoarCreateArgs = {
  input: BoarInput;
};

export type MutationBoarUpdateArgs = {
  id: Scalars['ID'];
  input: BoarInput;
};

export type MutationBoarsDeleteArgs = {
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type MutationEmployeeCreateArgs = {
  input: EmployeeInput;
};

export type MutationEmployeeUpdateArgs = {
  id: Scalars['ID'];
  input: EmployeeInput;
};

export type MutationEmployeesDeleteArgs = {
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type MutationBirthRecordCreateArgs = {
  input: BirthRecordInput;
};

export type MutationBirthRecordUpdateArgs = {
  id: Scalars['ID'];
  input: BirthRecordInput;
};

export type MutationBirthRecordsDeleteArgs = {
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type MutationVaccinationRecordCreateArgs = {
  input: VaccinationInput;
};

export type MutationVaccinationRecordUpdateArgs = {
  id: Scalars['ID'];
  input: VaccinationInput;
};

export type MutationVaccinationRecordsDeleteArgs = {
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type MutationHealthRecordCreateArgs = {
  input: HealthRecordInput;
};

export type MutationHealthRecordUpdateArgs = {
  id: Scalars['ID'];
  input: HealthRecordInput;
};

export type MutationHealthRecordsDeleteArgs = {
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Scalars['ID']>>;
};

export enum SortValue {
  AsCs = 'ASCs',
  Desc = 'DESC',
}

export type Sort = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<SortValue>;
};

export type Filter = {
  key: Scalars['String'];
  value: Scalars['String'];
  or?: Maybe<Array<Maybe<Filter>>>;
  and?: Maybe<Array<Maybe<Filter>>>;
};

export enum GenerationEnum {
  ParentStock = 'PARENT_STOCK',
  F1 = 'F1',
}

export type Sow = {
  __typename?: 'Sow';
  _id: Scalars['ID'];
  tag: Scalars['String'];
  birthDate: Scalars['DateTime'];
  breed: Scalars['String'];
  generation?: Maybe<GenerationEnum>;
  isImported: Scalars['Boolean'];
  purchaseDate?: Maybe<Scalars['DateTime']>;
  supplier?: Maybe<Supplier>;
  birthRecords: Array<BirthRecord>;
  vaccinationRecords: Array<VaccinationRecord>;
  sizeRecords: Array<SizeRecord>;
  weightRecords: Array<WeightRecord>;
  healthRecords: Array<HealthRecord>;
};

export type SowInput = {
  tag: Scalars['String'];
  birthDate: Scalars['DateTime'];
  breed: Scalars['String'];
  generation: GenerationEnum;
  isImported: Scalars['Boolean'];
  purchaseDate?: Maybe<Scalars['DateTime']>;
  supplierId?: Maybe<Scalars['ID']>;
};

export type Boar = {
  __typename?: 'Boar';
  tag: Scalars['String'];
  birthDate: Scalars['DateTime'];
  breed: Scalars['String'];
  isImported: Scalars['Boolean'];
  purchaseDate?: Maybe<Scalars['DateTime']>;
  supplier?: Maybe<Supplier>;
  vaccinationRecords: Array<VaccinationRecord>;
  sizeRecords: Array<SizeRecord>;
  weightRecords: Array<WeightRecord>;
  healthRecords: Array<HealthRecord>;
};

export type BoarInput = {
  tag: Scalars['String'];
  birthDate: Scalars['DateTime'];
  breed: Scalars['String'];
  isImported: Scalars['Boolean'];
  purchaseDate?: Maybe<Scalars['DateTime']>;
  supplierId?: Maybe<Scalars['ID']>;
};

export type Hog = {
  __typename?: 'Hog';
  _id: Scalars['ID'];
  tag: Scalars['String'];
  birtRecord: BirthRecord;
  parentSow: Sow;
  parentBoar: Boar;
  birthDate: Scalars['DateTime'];
  vaccinationRecords: Array<VaccinationRecord>;
  sizeRecords: Array<SizeRecord>;
  weightRecords: Array<WeightRecord>;
  healthRecords: Array<HealthRecord>;
};

export type HogInput = {
  tag: Scalars['String'];
  birthDate: Scalars['DateTime'];
  birtRecordId: Scalars['ID'];
  parentSowId: Scalars['ID'];
  parentBoarId: Scalars['ID'];
};

export type SizeRecord = {
  __typename?: 'SizeRecord';
  _id: Scalars['ID'];
  lengthCm: Scalars['Float'];
  girthCm: Scalars['Float'];
  date: Scalars['DateTime'];
  recorder: Employee;
  measuredBy: Employee;
};

export type SizeRecordInput = {
  pigId: Scalars['ID'];
  lengthCm: Scalars['Float'];
  girthCm: Scalars['Float'];
  date: Scalars['DateTime'];
  recorderId: Scalars['ID'];
  measuredById: Scalars['ID'];
};

export type WeightRecord = {
  __typename?: 'WeightRecord';
  _id: Scalars['ID'];
  weightKg: Scalars['Float'];
  date: Scalars['DateTime'];
  recorder: Employee;
  measuredBy: Employee;
};

export type WeightRecordInput = {
  pigId: Scalars['ID'];
  weightKg: Scalars['Float'];
  date: Scalars['DateTime'];
  recorderId: Scalars['ID'];
  measuredById: Scalars['ID'];
};

export type VaccinationRecord = {
  __typename?: 'VaccinationRecord';
  _id: Scalars['ID'];
  vaccineName: Scalars['String'];
  quantity: Scalars['Float'];
  unit: Scalars['String'];
  adminiteredBy: Employee;
  recorder: Employee;
};

export type VaccinationInput = {
  pigId: Scalars['ID'];
  vaccineName: Scalars['String'];
  quantity: Scalars['Float'];
  unit: Scalars['String'];
  administeredById: Scalars['ID'];
  recorderId: Scalars['ID'];
};

export type BirthRecord = {
  __typename?: 'BirthRecord';
  sow: Sow;
  boar?: Maybe<Boar>;
  laborStart: Scalars['DateTime'];
  laborEnd: Scalars['DateTime'];
  alivePigletsCount: Scalars['Int'];
  stillBornCount: Scalars['Int'];
  attendant: Employee;
  recorder: Employee;
};

export type BirthRecordInput = {
  sowId: Scalars['ID'];
  boarId: Scalars['ID'];
  laborStart: Scalars['DateTime'];
  laborEnd: Scalars['DateTime'];
  alivePigletsCount: Scalars['Int'];
  stillBornCount: Scalars['Int'];
  attendantId: Scalars['ID'];
  recorderId: Scalars['ID'];
};

export type HealthRecord = {
  __typename?: 'HealthRecord';
  _id: Scalars['ID'];
  date: Scalars['DateTime'];
  description: Scalars['String'];
  actionTaken: Scalars['String'];
  recorder: Employee;
};

export type HealthRecordInput = {
  pigId: Scalars['ID'];
  date: Scalars['DateTime'];
  description: Scalars['String'];
  actionTaken: Scalars['String'];
  recorderId: Scalars['ID'];
};

export type Employee = {
  __typename?: 'Employee';
  _id: Scalars['ID'];
  givenName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  surname: Scalars['String'];
  address: Scalars['String'];
  contactNumber: Scalars['String'];
  birthDate: Scalars['DateTime'];
  startDate: Scalars['DateTime'];
  endDate?: Maybe<Scalars['DateTime']>;
};

export type EmployeeInput = {
  givenName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  surname: Scalars['String'];
  address: Scalars['String'];
  contactNumber: Scalars['String'];
  birthDate: Scalars['DateTime'];
  startDate: Scalars['DateTime'];
};

export type Supplier = {
  __typename?: 'Supplier';
  id?: Maybe<Scalars['ID']>;
  companyName: Scalars['String'];
  contactPerson: Scalars['String'];
  contactNumber: Scalars['String'];
  address: Scalars['String'];
};

export type SupplierInput = {
  companyName: Scalars['String'];
  contactPerson: Scalars['String'];
  contactNumber: Scalars['String'];
  address: Scalars['String'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  SortValue: SortValue;
  Sort: Sort;
  String: ResolverTypeWrapper<Scalars['String']>;
  Filter: Filter;
  GenerationEnum: GenerationEnum;
  Sow: ResolverTypeWrapper<Sow>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  SowInput: SowInput;
  Boar: ResolverTypeWrapper<Boar>;
  BoarInput: BoarInput;
  Hog: ResolverTypeWrapper<Hog>;
  HogInput: HogInput;
  SizeRecord: ResolverTypeWrapper<SizeRecord>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  SizeRecordInput: SizeRecordInput;
  WeightRecord: ResolverTypeWrapper<WeightRecord>;
  WeightRecordInput: WeightRecordInput;
  VaccinationRecord: ResolverTypeWrapper<VaccinationRecord>;
  VaccinationInput: VaccinationInput;
  BirthRecord: ResolverTypeWrapper<BirthRecord>;
  BirthRecordInput: BirthRecordInput;
  HealthRecord: ResolverTypeWrapper<HealthRecord>;
  HealthRecordInput: HealthRecordInput;
  Employee: ResolverTypeWrapper<Employee>;
  EmployeeInput: EmployeeInput;
  Supplier: ResolverTypeWrapper<Supplier>;
  SupplierInput: SupplierInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: Scalars['DateTime'];
  Query: {};
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Sort: Sort;
  String: Scalars['String'];
  Filter: Filter;
  Sow: Sow;
  Boolean: Scalars['Boolean'];
  SowInput: SowInput;
  Boar: Boar;
  BoarInput: BoarInput;
  Hog: Hog;
  HogInput: HogInput;
  SizeRecord: SizeRecord;
  Float: Scalars['Float'];
  SizeRecordInput: SizeRecordInput;
  WeightRecord: WeightRecord;
  WeightRecordInput: WeightRecordInput;
  VaccinationRecord: VaccinationRecord;
  VaccinationInput: VaccinationInput;
  BirthRecord: BirthRecord;
  BirthRecordInput: BirthRecordInput;
  HealthRecord: HealthRecord;
  HealthRecordInput: HealthRecordInput;
  Employee: Employee;
  EmployeeInput: EmployeeInput;
  Supplier: Supplier;
  SupplierInput: SupplierInput;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  sow?: Resolver<
    Maybe<ResolversTypes['Sow']>,
    ParentType,
    ContextType,
    RequireFields<QuerySowArgs, 'id'>
  >;
  sows?: Resolver<
    Array<ResolversTypes['Sow']>,
    ParentType,
    ContextType,
    RequireFields<QuerySowsArgs, never>
  >;
  sowsCount?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<QuerySowsCountArgs, never>
  >;
  hog?: Resolver<
    Maybe<ResolversTypes['Hog']>,
    ParentType,
    ContextType,
    RequireFields<QueryHogArgs, 'id'>
  >;
  hogs?: Resolver<
    Array<ResolversTypes['Hog']>,
    ParentType,
    ContextType,
    RequireFields<QueryHogsArgs, never>
  >;
  hogsCount?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<QueryHogsCountArgs, never>
  >;
  boar?: Resolver<
    Maybe<ResolversTypes['Boar']>,
    ParentType,
    ContextType,
    RequireFields<QueryBoarArgs, 'id'>
  >;
  boars?: Resolver<
    Array<ResolversTypes['Boar']>,
    ParentType,
    ContextType,
    RequireFields<QueryBoarsArgs, never>
  >;
  boarsCount?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<QueryBoarsCountArgs, never>
  >;
  employee?: Resolver<
    Maybe<ResolversTypes['Employee']>,
    ParentType,
    ContextType,
    RequireFields<QueryEmployeeArgs, 'id'>
  >;
  employees?: Resolver<
    Array<ResolversTypes['Employee']>,
    ParentType,
    ContextType,
    RequireFields<QueryEmployeesArgs, never>
  >;
  employeesCount?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<QueryEmployeesCountArgs, never>
  >;
  birthRecord?: Resolver<
    Maybe<ResolversTypes['BirthRecord']>,
    ParentType,
    ContextType,
    RequireFields<QueryBirthRecordArgs, 'id'>
  >;
  birthRecords?: Resolver<
    Array<ResolversTypes['BirthRecord']>,
    ParentType,
    ContextType,
    RequireFields<QueryBirthRecordsArgs, never>
  >;
  birthRecordsCount?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    RequireFields<QueryBirthRecordsCountArgs, never>
  >;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  sowCreate?: Resolver<
    ResolversTypes['Sow'],
    ParentType,
    ContextType,
    RequireFields<MutationSowCreateArgs, 'input'>
  >;
  sowUpdate?: Resolver<
    ResolversTypes['Sow'],
    ParentType,
    ContextType,
    RequireFields<MutationSowUpdateArgs, 'id' | 'input'>
  >;
  sowsDelete?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<MutationSowsDeleteArgs, never>
  >;
  hogCreate?: Resolver<
    ResolversTypes['Hog'],
    ParentType,
    ContextType,
    RequireFields<MutationHogCreateArgs, 'input'>
  >;
  hogUpdate?: Resolver<
    ResolversTypes['Hog'],
    ParentType,
    ContextType,
    RequireFields<MutationHogUpdateArgs, 'id' | 'input'>
  >;
  hogsDelete?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<MutationHogsDeleteArgs, never>
  >;
  boarCreate?: Resolver<
    ResolversTypes['Boar'],
    ParentType,
    ContextType,
    RequireFields<MutationBoarCreateArgs, 'input'>
  >;
  boarUpdate?: Resolver<
    ResolversTypes['Boar'],
    ParentType,
    ContextType,
    RequireFields<MutationBoarUpdateArgs, 'id' | 'input'>
  >;
  boarsDelete?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<MutationBoarsDeleteArgs, never>
  >;
  employeeCreate?: Resolver<
    ResolversTypes['Employee'],
    ParentType,
    ContextType,
    RequireFields<MutationEmployeeCreateArgs, 'input'>
  >;
  employeeUpdate?: Resolver<
    ResolversTypes['Employee'],
    ParentType,
    ContextType,
    RequireFields<MutationEmployeeUpdateArgs, 'id' | 'input'>
  >;
  employeesDelete?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<MutationEmployeesDeleteArgs, never>
  >;
  birthRecordCreate?: Resolver<
    Maybe<ResolversTypes['ID']>,
    ParentType,
    ContextType,
    RequireFields<MutationBirthRecordCreateArgs, 'input'>
  >;
  birthRecordUpdate?: Resolver<
    ResolversTypes['BirthRecord'],
    ParentType,
    ContextType,
    RequireFields<MutationBirthRecordUpdateArgs, 'id' | 'input'>
  >;
  birthRecordsDelete?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<MutationBirthRecordsDeleteArgs, never>
  >;
  vaccinationRecordCreate?: Resolver<
    Maybe<ResolversTypes['ID']>,
    ParentType,
    ContextType,
    RequireFields<MutationVaccinationRecordCreateArgs, 'input'>
  >;
  vaccinationRecordUpdate?: Resolver<
    ResolversTypes['VaccinationRecord'],
    ParentType,
    ContextType,
    RequireFields<MutationVaccinationRecordUpdateArgs, 'id' | 'input'>
  >;
  vaccinationRecordsDelete?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<MutationVaccinationRecordsDeleteArgs, never>
  >;
  healthRecordCreate?: Resolver<
    Maybe<ResolversTypes['ID']>,
    ParentType,
    ContextType,
    RequireFields<MutationHealthRecordCreateArgs, 'input'>
  >;
  healthRecordUpdate?: Resolver<
    ResolversTypes['HealthRecord'],
    ParentType,
    ContextType,
    RequireFields<MutationHealthRecordUpdateArgs, 'id' | 'input'>
  >;
  healthRecordsDelete?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType,
    RequireFields<MutationHealthRecordsDeleteArgs, never>
  >;
};

export type SowResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Sow'] = ResolversParentTypes['Sow']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  birthDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  breed?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  generation?: Resolver<
    Maybe<ResolversTypes['GenerationEnum']>,
    ParentType,
    ContextType
  >;
  isImported?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  purchaseDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  supplier?: Resolver<
    Maybe<ResolversTypes['Supplier']>,
    ParentType,
    ContextType
  >;
  birthRecords?: Resolver<
    Array<ResolversTypes['BirthRecord']>,
    ParentType,
    ContextType
  >;
  vaccinationRecords?: Resolver<
    Array<ResolversTypes['VaccinationRecord']>,
    ParentType,
    ContextType
  >;
  sizeRecords?: Resolver<
    Array<ResolversTypes['SizeRecord']>,
    ParentType,
    ContextType
  >;
  weightRecords?: Resolver<
    Array<ResolversTypes['WeightRecord']>,
    ParentType,
    ContextType
  >;
  healthRecords?: Resolver<
    Array<ResolversTypes['HealthRecord']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BoarResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Boar'] = ResolversParentTypes['Boar']
> = {
  tag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  birthDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  breed?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isImported?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  purchaseDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  supplier?: Resolver<
    Maybe<ResolversTypes['Supplier']>,
    ParentType,
    ContextType
  >;
  vaccinationRecords?: Resolver<
    Array<ResolversTypes['VaccinationRecord']>,
    ParentType,
    ContextType
  >;
  sizeRecords?: Resolver<
    Array<ResolversTypes['SizeRecord']>,
    ParentType,
    ContextType
  >;
  weightRecords?: Resolver<
    Array<ResolversTypes['WeightRecord']>,
    ParentType,
    ContextType
  >;
  healthRecords?: Resolver<
    Array<ResolversTypes['HealthRecord']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HogResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Hog'] = ResolversParentTypes['Hog']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  birtRecord?: Resolver<ResolversTypes['BirthRecord'], ParentType, ContextType>;
  parentSow?: Resolver<ResolversTypes['Sow'], ParentType, ContextType>;
  parentBoar?: Resolver<ResolversTypes['Boar'], ParentType, ContextType>;
  birthDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  vaccinationRecords?: Resolver<
    Array<ResolversTypes['VaccinationRecord']>,
    ParentType,
    ContextType
  >;
  sizeRecords?: Resolver<
    Array<ResolversTypes['SizeRecord']>,
    ParentType,
    ContextType
  >;
  weightRecords?: Resolver<
    Array<ResolversTypes['WeightRecord']>,
    ParentType,
    ContextType
  >;
  healthRecords?: Resolver<
    Array<ResolversTypes['HealthRecord']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SizeRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SizeRecord'] = ResolversParentTypes['SizeRecord']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lengthCm?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  girthCm?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  recorder?: Resolver<ResolversTypes['Employee'], ParentType, ContextType>;
  measuredBy?: Resolver<ResolversTypes['Employee'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WeightRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['WeightRecord'] = ResolversParentTypes['WeightRecord']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  weightKg?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  recorder?: Resolver<ResolversTypes['Employee'], ParentType, ContextType>;
  measuredBy?: Resolver<ResolversTypes['Employee'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VaccinationRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['VaccinationRecord'] = ResolversParentTypes['VaccinationRecord']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  vaccineName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  adminiteredBy?: Resolver<ResolversTypes['Employee'], ParentType, ContextType>;
  recorder?: Resolver<ResolversTypes['Employee'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BirthRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BirthRecord'] = ResolversParentTypes['BirthRecord']
> = {
  sow?: Resolver<ResolversTypes['Sow'], ParentType, ContextType>;
  boar?: Resolver<Maybe<ResolversTypes['Boar']>, ParentType, ContextType>;
  laborStart?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  laborEnd?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  alivePigletsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stillBornCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  attendant?: Resolver<ResolversTypes['Employee'], ParentType, ContextType>;
  recorder?: Resolver<ResolversTypes['Employee'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HealthRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HealthRecord'] = ResolversParentTypes['HealthRecord']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  actionTaken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recorder?: Resolver<ResolversTypes['Employee'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  givenName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  middleName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  surname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contactNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  birthDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  endDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SupplierResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Supplier'] = ResolversParentTypes['Supplier']
> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  companyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contactPerson?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contactNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Sow?: SowResolvers<ContextType>;
  Boar?: BoarResolvers<ContextType>;
  Hog?: HogResolvers<ContextType>;
  SizeRecord?: SizeRecordResolvers<ContextType>;
  WeightRecord?: WeightRecordResolvers<ContextType>;
  VaccinationRecord?: VaccinationRecordResolvers<ContextType>;
  BirthRecord?: BirthRecordResolvers<ContextType>;
  HealthRecord?: HealthRecordResolvers<ContextType>;
  Employee?: EmployeeResolvers<ContextType>;
  Supplier?: SupplierResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
