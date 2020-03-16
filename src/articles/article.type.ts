import { ObjectType, Field } from 'type-graphql';

import { Image } from './../images/image.type';

@ObjectType()
export class Article {
  @Field()
  id: string;
  @Field()
  latLong: string
  @Field()
  longitude: string;
  @Field()
  listingDescription: string
  @Field(type => Image)
  listingImage: Image
  @Field(type => [String])
  relatedParts: string[]
  @Field()
  title: string
  @Field()
  url: string
}

export default Article;