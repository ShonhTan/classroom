module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateUser {
  count: Int!
}

type AggregateWork {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createWork(data: WorkCreateInput!): Work!
  updateWork(data: WorkUpdateInput!, where: WorkWhereUniqueInput!): Work
  updateManyWorks(data: WorkUpdateManyMutationInput!, where: WorkWhereInput): BatchPayload!
  upsertWork(where: WorkWhereUniqueInput!, create: WorkCreateInput!, update: WorkUpdateInput!): Work!
  deleteWork(where: WorkWhereUniqueInput!): Work
  deleteManyWorks(where: WorkWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  work(where: WorkWhereUniqueInput!): Work
  works(where: WorkWhereInput, orderBy: WorkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Work]!
  worksConnection(where: WorkWhereInput, orderBy: WorkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WorkConnection!
  node(id: ID!): Node
}

enum Role {
  ADMIN
  USER
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  work(where: WorkSubscriptionWhereInput): WorkSubscriptionPayload
}

type User {
  id: ID!
  role: Role!
  firstName: String!
  lastName: String!
  email: String!
  phone: Int
  address: String
  city: String
  zipCode: Int
  bio: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  role: Role!
  firstName: String!
  lastName: String!
  email: String!
  phone: Int
  address: String
  city: String
  zipCode: Int
  bio: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  role_ASC
  role_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  phone_ASC
  phone_DESC
  address_ASC
  address_DESC
  city_ASC
  city_DESC
  zipCode_ASC
  zipCode_DESC
  bio_ASC
  bio_DESC
}

type UserPreviousValues {
  id: ID!
  role: Role!
  firstName: String!
  lastName: String!
  email: String!
  phone: Int
  address: String
  city: String
  zipCode: Int
  bio: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  role: Role
  firstName: String
  lastName: String
  email: String
  phone: Int
  address: String
  city: String
  zipCode: Int
  bio: String
}

input UserUpdateManyMutationInput {
  role: Role
  firstName: String
  lastName: String
  email: String
  phone: Int
  address: String
  city: String
  zipCode: Int
  bio: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  phone: Int
  phone_not: Int
  phone_in: [Int!]
  phone_not_in: [Int!]
  phone_lt: Int
  phone_lte: Int
  phone_gt: Int
  phone_gte: Int
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  zipCode: Int
  zipCode_not: Int
  zipCode_in: [Int!]
  zipCode_not_in: [Int!]
  zipCode_lt: Int
  zipCode_lte: Int
  zipCode_gt: Int
  zipCode_gte: Int
  bio: String
  bio_not: String
  bio_in: [String!]
  bio_not_in: [String!]
  bio_lt: String
  bio_lte: String
  bio_gt: String
  bio_gte: String
  bio_contains: String
  bio_not_contains: String
  bio_starts_with: String
  bio_not_starts_with: String
  bio_ends_with: String
  bio_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}

type Work {
  id: ID!
  title: String!
  organization: String!
  description: String
  skills: [String!]!
  softwares: [String!]!
}

type WorkConnection {
  pageInfo: PageInfo!
  edges: [WorkEdge]!
  aggregate: AggregateWork!
}

input WorkCreateInput {
  id: ID
  title: String!
  organization: String!
  description: String
  skills: WorkCreateskillsInput
  softwares: WorkCreatesoftwaresInput
}

input WorkCreateskillsInput {
  set: [String!]
}

input WorkCreatesoftwaresInput {
  set: [String!]
}

type WorkEdge {
  node: Work!
  cursor: String!
}

enum WorkOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  organization_ASC
  organization_DESC
  description_ASC
  description_DESC
}

type WorkPreviousValues {
  id: ID!
  title: String!
  organization: String!
  description: String
  skills: [String!]!
  softwares: [String!]!
}

type WorkSubscriptionPayload {
  mutation: MutationType!
  node: Work
  updatedFields: [String!]
  previousValues: WorkPreviousValues
}

input WorkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WorkWhereInput
  AND: [WorkSubscriptionWhereInput!]
  OR: [WorkSubscriptionWhereInput!]
  NOT: [WorkSubscriptionWhereInput!]
}

input WorkUpdateInput {
  title: String
  organization: String
  description: String
  skills: WorkUpdateskillsInput
  softwares: WorkUpdatesoftwaresInput
}

input WorkUpdateManyMutationInput {
  title: String
  organization: String
  description: String
  skills: WorkUpdateskillsInput
  softwares: WorkUpdatesoftwaresInput
}

input WorkUpdateskillsInput {
  set: [String!]
}

input WorkUpdatesoftwaresInput {
  set: [String!]
}

input WorkWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  organization: String
  organization_not: String
  organization_in: [String!]
  organization_not_in: [String!]
  organization_lt: String
  organization_lte: String
  organization_gt: String
  organization_gte: String
  organization_contains: String
  organization_not_contains: String
  organization_starts_with: String
  organization_not_starts_with: String
  organization_ends_with: String
  organization_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [WorkWhereInput!]
  OR: [WorkWhereInput!]
  NOT: [WorkWhereInput!]
}

input WorkWhereUniqueInput {
  id: ID
}
`
      }
    