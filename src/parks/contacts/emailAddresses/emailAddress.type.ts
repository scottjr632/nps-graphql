import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class EmailAddress {
  @Field()
  emailAddress: string
  @Field()
  description: string
}

export default EmailAddress;