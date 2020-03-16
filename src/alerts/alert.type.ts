import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Alert {
  @Field()
  title: string;
  @Field()
  id: string;
  @Field()
  description: string;
  @Field()
  category: string;
  @Field()
  url: string;
  @Field()
  parkCode: string;
}

export default Alert;