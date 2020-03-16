import { registerEnumType } from 'type-graphql';

export enum PhoneNumberType {
  Voice = 'Voice',
  Fax = 'Fax',
  TTY = 'TTY'
}

registerEnumType(PhoneNumberType, {
  name: 'PhoneNumberType',
  description: 'The type of phone number',
});

export default PhoneNumberType;