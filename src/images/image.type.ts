import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Image {
  @Field()
  credit: string
  @Field()
  altText: string
  @Field()
  title: string
  @Field({ nullable: true })
  description?: string
  @Field()
  caption: string
  @Field()
  url: string
}

export default Image;