import type { Entity, ListResponse } from './common';
import type { Prisma } from '@prisma/client';

export interface User extends Entity {
  name: string;
  lastName: string;
  email: string;
  sex: string;
  birthdate: Date;
  length: number;
  weight: number;
  password_hash:string;
  roles:Prisma.JsonValue;
}

export interface UserCreateInput {
  name: string;
  lastName: string;
  email: string;
  sex: string;
  birthdate: Date;
  length: number;
  weight: number;
  password: string;
}
export interface PublicUser extends Pick<User, 'id' | 'name' | 'lastName' |'email'
|'sex'|'birthdate'|'length'|'weight'> {}
//in cursus kan je geen wachtwoord updaten
export interface UserUpdateInput extends Pick<UserCreateInput, 'name' | 'email'> {} 

export interface CreateUserRequest extends UserCreateInput {
  name: string;
  lastName: string;
  email: string;
  password:string;
  sex: string;
  birthdate: Date;
  length: number;
}
export interface UpdateUserRequest extends Pick<CreateUserRequest, 'name' | 'lastName' |'email'
|'sex'|'birthdate'|'length'|'weight'> {}

export interface GetAllUsersResponse extends ListResponse<PublicUser> {}
export interface GetUserByIdResponse extends PublicUser {}
export interface CreateUserResponse extends GetUserByIdResponse {}
export interface UpdateUserResponse extends GetUserByIdResponse {}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}
