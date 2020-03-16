import { ObjectType, Field } from 'type-graphql';

import { AddressType } from './address.enum';

@ObjectType()
export class Address {
  @Field()
  postalCode: string
  @Field()
  city: string
  @Field()
  stateCode: string
  @Field(type => AddressType)
  type: AddressType
  @Field()
  line1: string
  @Field()
  line2: string
  @Field()
  line3: string
}

export default Address;