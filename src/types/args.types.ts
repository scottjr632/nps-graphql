import { ArgsType, Field } from 'type-graphql'

@ArgsType()
export class GetParksArgs {
    @Field(type => [String], { nullable: true })
    parkCodes: string[]

    @Field(type => [String], { nullable: true })
    stateCodes: string[]

    @Field(type => Number, { nullable: true })
    limit: number

    @Field(type =>  Number, { nullable: true })
    start: number

    @Field(type => String, { nullable: true })
    q: string
}