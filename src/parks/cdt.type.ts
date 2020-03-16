import { ObjectType, Field } from 'type-graphql';
@ObjectType({ description: 'Cost - Description - Type'})
export class CDT {
  @Field()
  cost: string
  @Field()
  description: string
  @Field()
  title: string
}

export default CDT;