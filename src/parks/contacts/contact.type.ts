import { ObjectType, Field } from 'type-graphql';

import { EmailAddress } from './emailAddresses/emailAddress.type';
import { PhoneNumber } from './phoneNumbers/phoneNumber.type';

@ObjectType()
export class Contact {
  @Field(type => [PhoneNumber])
  phoneNumbers: PhoneNumber[]
  @Field(type => [EmailAddress])
  emailAddresses: EmailAddress[]
}

export default Contact;