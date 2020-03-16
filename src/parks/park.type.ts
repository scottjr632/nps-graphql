import { ObjectType, Field } from 'type-graphql';

import { Image } from './../images/image.type';

import { CDT } from './cdt.type';
import { Contact } from './contacts/contact.type';
import { Address } from './address/address.type';

@ObjectType()
export class Park {
  @Field(type => [Address])
  addresses: Address[]
  @Field(type => Contact)
  contacts: Contact
  @Field()
  description: string
  @Field()
  designation: string
  @Field()
  directionsInfo: string
  @Field()
  directionsUrl: string
  @Field(type => [CDT])
  entranceFees: CDT[]
  @Field(type => [CDT])
  entrancePasses: CDT[]
  @Field()
  fullName: string
  @Field()
  id: string
  @Field(type => [Image])
  images: Image[]
}