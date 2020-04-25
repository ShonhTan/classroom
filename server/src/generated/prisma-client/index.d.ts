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

export type WorkOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface WorkCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
}

export interface WorkUpdateInput {
  name?: Maybe<String>;
}

export interface WorkUpdateManyMutationInput {
  name?: Maybe<String>;
}

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
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  AND?: Maybe<WorkWhereInput[] | WorkWhereInput>;
  OR?: Maybe<WorkWhereInput[] | WorkWhereInput>;
  NOT?: Maybe<WorkWhereInput[] | WorkWhereInput>;
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

export type WorkWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
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

export interface WorkPreviousValues {
  id: ID_Output;
  name: String;
}

export interface WorkPreviousValuesPromise
  extends Promise<WorkPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface WorkPreviousValuesSubscription
  extends Promise<AsyncIterator<WorkPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
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

export interface Work {
  id: ID_Output;
  name: String;
}

export interface WorkPromise extends Promise<Work>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface WorkSubscription
  extends Promise<AsyncIterator<Work>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface WorkNullablePromise
  extends Promise<Work | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
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

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Work",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
