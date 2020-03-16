import { registerEnumType } from 'type-graphql';

export enum AddressType {
  Physical = 'Physical',
  Mailing = 'Mailing'
}

registerEnumType(AddressType, {
  name: 'AddressType',
  description: 'The type of address',
});

export default AddressType;
