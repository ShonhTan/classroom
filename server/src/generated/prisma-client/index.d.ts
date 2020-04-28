// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  user: (where?: UserWhereInput) => Promise<boolean>;
  work: (where?: WorkWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  work: (where: WorkWhereUniqueInput) => WorkNullablePromise;
  works: (args?: {
    where?: WorkWhereInput;
    orderBy?: WorkOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Work>;
  worksConnection: (args?: {
    where?: WorkWhereInput;
    orderBy?: WorkOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => WorkConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
  createWork: (data: WorkCreateInput) => WorkPromise;
  updateWork: (args: {
    data: WorkUpdateInput;
    where: WorkWhereUniqueInput;
  }) => WorkPromise;
  updateManyWorks: (args: {
    data: WorkUpdateManyMutationInput;
    where?: WorkWhereInput;
  }) => BatchPayloadPromise;
  upsertWork: (args: {
    where: WorkWhereUniqueInput;
    create: WorkCreateInput;
    update: WorkUpdateInput;
  }) => WorkPromise;
  deleteWork: (where: WorkWhereUniqueInput) => WorkPromise;
  deleteManyWorks: (where?: WorkWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
  work: (
    where?: WorkSubscriptionWhereInput
  ) => WorkSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "role_ASC"
  | "role_DESC"
  | "firstName_ASC"
  | "firstName_DESC"
  | "lastName_ASC"
  | "lastName_DESC"
  | "email_ASC"
  | "email_DESC"
  | "phone_ASC"
  | "phone_DESC"
  | "address_ASC"
  | "address_DESC"
  | "city_ASC"
  | "city_DESC"
  | "zipCode_ASC"
  | "zipCode_DESC"
  | "bio_ASC"
  | "bio_DESC";

export type WorkOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "organization_ASC"
  | "organization_DESC"
  | "description_ASC"
  | "description_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type Role = "ADMIN" | "USER";

export interface WorkUpdateInput {
  title?: Maybe<String>;
  organization?: Maybe<String>;
  description?: Maybe<String>;
  skills?: Maybe<WorkUpdateskillsInput>;
  softwares?: Maybe<WorkUpdatesoftwaresInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  role: Role;
  firstName: String;
  lastName: String;
  email: String;
  phone?: Maybe<Int>;
  address?: Maybe<String>;
  city?: Maybe<String>;
  zipCode?: Maybe<Int>;
  bio?: Maybe<String>;
}

export interface WorkCreateskillsInput {
  set?: Maybe<String[] | String>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface WorkWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  organization?: Maybe<String>;
  organization_not?: Maybe<String>;
  organization_in?: Maybe<String[] | String>;
  organization_not_in?: Maybe<String[] | String>;
  organization_lt?: Maybe<String>;
  organization_lte?: Maybe<String>;
  organization_gt?: Maybe<String>;
  organization_gte?: Maybe<String>;
  organization_contains?: Maybe<String>;
  organization_not_contains?: Maybe<String>;
  organization_starts_with?: Maybe<String>;
  organization_not_starts_with?: Maybe<String>;
  organization_ends_with?: Maybe<String>;
  organization_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  AND?: Maybe<WorkWhereInput[] | WorkWhereInput>;
  OR?: Maybe<WorkWhereInput[] | WorkWhereInput>;
  NOT?: Maybe<WorkWhereInput[] | WorkWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  role?: Maybe<Role>;
  role_not?: Maybe<Role>;
  role_in?: Maybe<Role[] | Role>;
  role_not_in?: Maybe<Role[] | Role>;
  firstName?: Maybe<String>;
  firstName_not?: Maybe<String>;
  firstName_in?: Maybe<String[] | String>;
  firstName_not_in?: Maybe<String[] | String>;
  firstName_lt?: Maybe<String>;
  firstName_lte?: Maybe<String>;
  firstName_gt?: Maybe<String>;
  firstName_gte?: Maybe<String>;
  firstName_contains?: Maybe<String>;
  firstName_not_contains?: Maybe<String>;
  firstName_starts_with?: Maybe<String>;
  firstName_not_starts_with?: Maybe<String>;
  firstName_ends_with?: Maybe<String>;
  firstName_not_ends_with?: Maybe<String>;
  lastName?: Maybe<String>;
  lastName_not?: Maybe<String>;
  lastName_in?: Maybe<String[] | String>;
  lastName_not_in?: Maybe<String[] | String>;
  lastName_lt?: Maybe<String>;
  lastName_lte?: Maybe<String>;
  lastName_gt?: Maybe<String>;
  lastName_gte?: Maybe<String>;
  lastName_contains?: Maybe<String>;
  lastName_not_contains?: Maybe<String>;
  lastName_starts_with?: Maybe<String>;
  lastName_not_starts_with?: Maybe<String>;
  lastName_ends_with?: Maybe<String>;
  lastName_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  phone?: Maybe<Int>;
  phone_not?: Maybe<Int>;
  phone_in?: Maybe<Int[] | Int>;
  phone_not_in?: Maybe<Int[] | Int>;
  phone_lt?: Maybe<Int>;
  phone_lte?: Maybe<Int>;
  phone_gt?: Maybe<Int>;
  phone_gte?: Maybe<Int>;
  address?: Maybe<String>;
  address_not?: Maybe<String>;
  address_in?: Maybe<String[] | String>;
  address_not_in?: Maybe<String[] | String>;
  address_lt?: Maybe<String>;
  address_lte?: Maybe<String>;
  address_gt?: Maybe<String>;
  address_gte?: Maybe<String>;
  address_contains?: Maybe<String>;
  address_not_contains?: Maybe<String>;
  address_starts_with?: Maybe<String>;
  address_not_starts_with?: Maybe<String>;
  address_ends_with?: Maybe<String>;
  address_not_ends_with?: Maybe<String>;
  city?: Maybe<String>;
  city_not?: Maybe<String>;
  city_in?: Maybe<String[] | String>;
  city_not_in?: Maybe<String[] | String>;
  city_lt?: Maybe<String>;
  city_lte?: Maybe<String>;
  city_gt?: Maybe<String>;
  city_gte?: Maybe<String>;
  city_contains?: Maybe<String>;
  city_not_contains?: Maybe<String>;
  city_starts_with?: Maybe<String>;
  city_not_starts_with?: Maybe<String>;
  city_ends_with?: Maybe<String>;
  city_not_ends_with?: Maybe<String>;
  zipCode?: Maybe<Int>;
  zipCode_not?: Maybe<Int>;
  zipCode_in?: Maybe<Int[] | Int>;
  zipCode_not_in?: Maybe<Int[] | Int>;
  zipCode_lt?: Maybe<Int>;
  zipCode_lte?: Maybe<Int>;
  zipCode_gt?: Maybe<Int>;
  zipCode_gte?: Maybe<Int>;
  bio?: Maybe<String>;
  bio_not?: Maybe<String>;
  bio_in?: Maybe<String[] | String>;
  bio_not_in?: Maybe<String[] | String>;
  bio_lt?: Maybe<String>;
  bio_lte?: Maybe<String>;
  bio_gt?: Maybe<String>;
  bio_gte?: Maybe<String>;
  bio_contains?: Maybe<String>;
  bio_not_contains?: Maybe<String>;
  bio_starts_with?: Maybe<String>;
  bio_not_starts_with?: Maybe<String>;
  bio_ends_with?: Maybe<String>;
  bio_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface WorkUpdatesoftwaresInput {
  set?: Maybe<String[] | String>;
}

export interface UserUpdateInput {
  role?: Maybe<Role>;
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  email?: Maybe<String>;
  phone?: Maybe<Int>;
  address?: Maybe<String>;
  city?: Maybe<String>;
  zipCode?: Maybe<Int>;
  bio?: Maybe<String>;
}

export interface UserUpdateManyMutationInput {
  role?: Maybe<Role>;
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  email?: Maybe<String>;
  phone?: Maybe<Int>;
  address?: Maybe<String>;
  city?: Maybe<String>;
  zipCode?: Maybe<Int>;
  bio?: Maybe<String>;
}

export interface WorkCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  organization: String;
  description?: Maybe<String>;
  skills?: Maybe<WorkCreateskillsInput>;
  softwares?: Maybe<WorkCreatesoftwaresInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface WorkUpdateskillsInput {
  set?: Maybe<String[] | String>;
}

export interface WorkUpdateManyMutationInput {
  title?: Maybe<String>;
  organization?: Maybe<String>;
  description?: Maybe<String>;
  skills?: Maybe<WorkUpdateskillsInput>;
  softwares?: Maybe<WorkUpdatesoftwaresInput>;
}

export type WorkWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface WorkCreatesoftwaresInput {
  set?: Maybe<String[] | String>;
}

export interface WorkSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<WorkWhereInput>;
  AND?: Maybe<WorkSubscriptionWhereInput[] | WorkSubscriptionWhereInput>;
  OR?: Maybe<WorkSubscriptionWhereInput[] | WorkSubscriptionWhereInput>;
  NOT?: Maybe<WorkSubscriptionWhereInput[] | WorkSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface AggregateWork {
  count: Int;
}

export interface AggregateWorkPromise
  extends Promise<AggregateWork>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateWorkSubscription
  extends Promise<AsyncIterator<AggregateWork>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface WorkPreviousValues {
  id: ID_Output;
  title: String;
  organization: String;
  description?: String;
  skills: String[];
  softwares: String[];
}

export interface WorkPreviousValuesPromise
  extends Promise<WorkPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  organization: () => Promise<String>;
  description: () => Promise<String>;
  skills: () => Promise<String[]>;
  softwares: () => Promise<String[]>;
}

export interface WorkPreviousValuesSubscription
  extends Promise<AsyncIterator<WorkPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  organization: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  skills: () => Promise<AsyncIterator<String[]>>;
  softwares: () => Promise<AsyncIterator<String[]>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  role: Role;
  firstName: String;
  lastName: String;
  email: String;
  phone?: Int;
  address?: String;
  city?: String;
  zipCode?: Int;
  bio?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  role: () => Promise<Role>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  email: () => Promise<String>;
  phone: () => Promise<Int>;
  address: () => Promise<String>;
  city: () => Promise<String>;
  zipCode: () => Promise<Int>;
  bio: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  role: () => Promise<AsyncIterator<Role>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<Int>>;
  address: () => Promise<AsyncIterator<String>>;
  city: () => Promise<AsyncIterator<String>>;
  zipCode: () => Promise<AsyncIterator<Int>>;
  bio: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  role: Role;
  firstName: String;
  lastName: String;
  email: String;
  phone?: Int;
  address?: String;
  city?: String;
  zipCode?: Int;
  bio?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  role: () => Promise<Role>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  email: () => Promise<String>;
  phone: () => Promise<Int>;
  address: () => Promise<String>;
  city: () => Promise<String>;
  zipCode: () => Promise<Int>;
  bio: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  role: () => Promise<AsyncIterator<Role>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<Int>>;
  address: () => Promise<AsyncIterator<String>>;
  city: () => Promise<AsyncIterator<String>>;
  zipCode: () => Promise<AsyncIterator<Int>>;
  bio: () => Promise<AsyncIterator<String>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  role: () => Promise<Role>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  email: () => Promise<String>;
  phone: () => Promise<Int>;
  address: () => Promise<String>;
  city: () => Promise<String>;
  zipCode: () => Promise<Int>;
  bio: () => Promise<String>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface WorkSubscriptionPayload {
  mutation: MutationType;
  node: Work;
  updatedFields: String[];
  previousValues: WorkPreviousValues;
}

export interface WorkSubscriptionPayloadPromise
  extends Promise<WorkSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = WorkPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = WorkPreviousValuesPromise>() => T;
}

export interface WorkSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<WorkSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = WorkSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = WorkPreviousValuesSubscription>() => T;
}

export interface WorkEdge {
  node: Work;
  cursor: String;
}

export interface WorkEdgePromise extends Promise<WorkEdge>, Fragmentable {
  node: <T = WorkPromise>() => T;
  cursor: () => Promise<String>;
}

export interface WorkEdgeSubscription
  extends Promise<AsyncIterator<WorkEdge>>,
    Fragmentable {
  node: <T = WorkSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Work {
  id: ID_Output;
  title: String;
  organization: String;
  description?: String;
  skills: String[];
  softwares: String[];
}

export interface WorkPromise extends Promise<Work>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  organization: () => Promise<String>;
  description: () => Promise<String>;
  skills: () => Promise<String[]>;
  softwares: () => Promise<String[]>;
}

export interface WorkSubscription
  extends Promise<AsyncIterator<Work>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  organization: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  skills: () => Promise<AsyncIterator<String[]>>;
  softwares: () => Promise<AsyncIterator<String[]>>;
}

export interface WorkNullablePromise
  extends Promise<Work | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  organization: () => Promise<String>;
  description: () => Promise<String>;
  skills: () => Promise<String[]>;
  softwares: () => Promise<String[]>;
}

export interface WorkConnection {
  pageInfo: PageInfo;
  edges: WorkEdge[];
}

export interface WorkConnectionPromise
  extends Promise<WorkConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<WorkEdge>>() => T;
  aggregate: <T = AggregateWorkPromise>() => T;
}

export interface WorkConnectionSubscription
  extends Promise<AsyncIterator<WorkConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<WorkEdgeSubscription>>>() => T;
  aggregate: <T = AggregateWorkSubscription>() => T;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Work",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
