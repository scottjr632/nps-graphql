import { ObjectType, Field } from 'type-graphql';

import { PhoneNumberType } from './phoneNumberType.enum';

@ObjectType()
export class PhoneNumber {
  @Field()
  phoneNumber: string
  @Field()
  description: string
  @Field()
  extension: string
  @Field(type => PhoneNumberType)
  type: PhoneNumberType
}

export default PhoneNumber;