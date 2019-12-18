/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  given_name: string,
  family_name: string,
  email: string,
  phone: string,
  owner?: string | null,
  hasPaidState?: string | null,
  address?: string | null,
  city?: string | null,
  province?: string | null,
  postalCode?: string | null,
  country?: string | null,
  profileImage?: string | null,
  aboutMeShort?: string | null,
  aboutMeLong?: string | null,
  interests?: string | null,
  currentRole?: string | null,
  currentScope?: string | null,
  personality?: string | null,
  orgName?: string | null,
  orgType?: string | null,
  orgSize?: string | null,
  orgDescription?: string | null,
};

export type UpdateUserInput = {
  id: string,
  given_name?: string | null,
  family_name?: string | null,
  email?: string | null,
  phone?: string | null,
  owner?: string | null,
  hasPaidState?: string | null,
  address?: string | null,
  city?: string | null,
  province?: string | null,
  postalCode?: string | null,
  country?: string | null,
  profileImage?: string | null,
  aboutMeShort?: string | null,
  aboutMeLong?: string | null,
  interests?: string | null,
  currentRole?: string | null,
  currentScope?: string | null,
  personality?: string | null,
  orgName?: string | null,
  orgType?: string | null,
  orgSize?: string | null,
  orgDescription?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null,
  given_name?: ModelStringFilterInput | null,
  family_name?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  phone?: ModelStringFilterInput | null,
  owner?: ModelStringFilterInput | null,
  hasPaidState?: ModelStringFilterInput | null,
  address?: ModelStringFilterInput | null,
  city?: ModelStringFilterInput | null,
  province?: ModelStringFilterInput | null,
  postalCode?: ModelStringFilterInput | null,
  country?: ModelStringFilterInput | null,
  profileImage?: ModelStringFilterInput | null,
  aboutMeShort?: ModelStringFilterInput | null,
  aboutMeLong?: ModelStringFilterInput | null,
  interests?: ModelStringFilterInput | null,
  currentRole?: ModelStringFilterInput | null,
  currentScope?: ModelStringFilterInput | null,
  personality?: ModelStringFilterInput | null,
  orgName?: ModelStringFilterInput | null,
  orgType?: ModelStringFilterInput | null,
  orgSize?: ModelStringFilterInput | null,
  orgDescription?: ModelStringFilterInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    given_name: string,
    family_name: string,
    email: string,
    phone: string,
    owner: string | null,
    hasPaidState: string | null,
    address: string | null,
    city: string | null,
    province: string | null,
    postalCode: string | null,
    country: string | null,
    profileImage: string | null,
    aboutMeShort: string | null,
    aboutMeLong: string | null,
    interests: string | null,
    currentRole: string | null,
    currentScope: string | null,
    personality: string | null,
    orgName: string | null,
    orgType: string | null,
    orgSize: string | null,
    orgDescription: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    given_name: string,
    family_name: string,
    email: string,
    phone: string,
    owner: string | null,
    hasPaidState: string | null,
    address: string | null,
    city: string | null,
    province: string | null,
    postalCode: string | null,
    country: string | null,
    profileImage: string | null,
    aboutMeShort: string | null,
    aboutMeLong: string | null,
    interests: string | null,
    currentRole: string | null,
    currentScope: string | null,
    personality: string | null,
    orgName: string | null,
    orgType: string | null,
    orgSize: string | null,
    orgDescription: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    given_name: string,
    family_name: string,
    email: string,
    phone: string,
    owner: string | null,
    hasPaidState: string | null,
    address: string | null,
    city: string | null,
    province: string | null,
    postalCode: string | null,
    country: string | null,
    profileImage: string | null,
    aboutMeShort: string | null,
    aboutMeLong: string | null,
    interests: string | null,
    currentRole: string | null,
    currentScope: string | null,
    personality: string | null,
    orgName: string | null,
    orgType: string | null,
    orgSize: string | null,
    orgDescription: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    given_name: string,
    family_name: string,
    email: string,
    phone: string,
    owner: string | null,
    hasPaidState: string | null,
    address: string | null,
    city: string | null,
    province: string | null,
    postalCode: string | null,
    country: string | null,
    profileImage: string | null,
    aboutMeShort: string | null,
    aboutMeLong: string | null,
    interests: string | null,
    currentRole: string | null,
    currentScope: string | null,
    personality: string | null,
    orgName: string | null,
    orgType: string | null,
    orgSize: string | null,
    orgDescription: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      given_name: string,
      family_name: string,
      email: string,
      phone: string,
      owner: string | null,
      hasPaidState: string | null,
      address: string | null,
      city: string | null,
      province: string | null,
      postalCode: string | null,
      country: string | null,
      profileImage: string | null,
      aboutMeShort: string | null,
      aboutMeLong: string | null,
      interests: string | null,
      currentRole: string | null,
      currentScope: string | null,
      personality: string | null,
      orgName: string | null,
      orgType: string | null,
      orgSize: string | null,
      orgDescription: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    given_name: string,
    family_name: string,
    email: string,
    phone: string,
    owner: string | null,
    hasPaidState: string | null,
    address: string | null,
    city: string | null,
    province: string | null,
    postalCode: string | null,
    country: string | null,
    profileImage: string | null,
    aboutMeShort: string | null,
    aboutMeLong: string | null,
    interests: string | null,
    currentRole: string | null,
    currentScope: string | null,
    personality: string | null,
    orgName: string | null,
    orgType: string | null,
    orgSize: string | null,
    orgDescription: string | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    given_name: string,
    family_name: string,
    email: string,
    phone: string,
    owner: string | null,
    hasPaidState: string | null,
    address: string | null,
    city: string | null,
    province: string | null,
    postalCode: string | null,
    country: string | null,
    profileImage: string | null,
    aboutMeShort: string | null,
    aboutMeLong: string | null,
    interests: string | null,
    currentRole: string | null,
    currentScope: string | null,
    personality: string | null,
    orgName: string | null,
    orgType: string | null,
    orgSize: string | null,
    orgDescription: string | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    given_name: string,
    family_name: string,
    email: string,
    phone: string,
    owner: string | null,
    hasPaidState: string | null,
    address: string | null,
    city: string | null,
    province: string | null,
    postalCode: string | null,
    country: string | null,
    profileImage: string | null,
    aboutMeShort: string | null,
    aboutMeLong: string | null,
    interests: string | null,
    currentRole: string | null,
    currentScope: string | null,
    personality: string | null,
    orgName: string | null,
    orgType: string | null,
    orgSize: string | null,
    orgDescription: string | null,
  } | null,
};