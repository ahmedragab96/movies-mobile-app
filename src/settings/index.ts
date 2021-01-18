import Config from 'react-native-config';
import * as yup from 'yup';

function isValidURL(str: string | undefined | null) {
  if (str === null || str === undefined) {
    return false;
  }
  const pattern = new RegExp('^(https?:\\/\\/)?' // protocol
    + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
    + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
    + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
    + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
    + '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
}

const configValidationSchema = yup.object({
  BASE_URL: yup
    .string()
    .required()
    .test('url', 'URL provided is not valid!', (value) => isValidURL(value)),
}).required();

type ObjectSchemaOf<T> = T extends yup.ObjectSchema<infer U> ? U : T;

export class Settings {
  static config: ObjectSchemaOf<typeof configValidationSchema>;

  static init() {
    try {
      Settings.config = configValidationSchema.validateSync(Config);
    } catch (error) {
      Settings.config = Config as any;
    }
  }
}
