import { Control, DeepMap, FieldError } from 'react-hook-form';
import * as yup from 'yup';
import {
  GenerationEnum,
  SowInput,
} from '../../../../../queries/autogenerate/schemas';
import { FormFieldTextProps } from './FormField.Text';

export const sowSchema = yup.object().shape({
  tag: yup.string().required(),
  birthDate: yup.date().required().default(new Date()),
  breed: yup.string().required(),
  generation: yup.mixed<GenerationEnum>().oneOf(Object.values(GenerationEnum)),
  isImported: yup.boolean().default(false),
  purchaseDate: yup.date().default(new Date()),
  supplierId: yup.string(),
});

export const sowSchemaDefaults = {
  tag: '',
  birthDate: new Date().toISOString(),
  breed: '',
  generation: GenerationEnum.ParentStock,
  isImported: false,
  supplierId: '',
  purchaseDate: new Date().toISOString(),
};

export const getProps = (
  field: keyof SowInput,
  control: Control<SowInput>,
  errors: DeepMap<SowInput, FieldError>,
): FormFieldTextProps => {
  const labels = {
    tag: 'Sow Tag',
    birthDate: 'Birth Date',
    breed: 'Breed',
    generation: 'Generation',
    isImported: 'Is Purchased?',
    purchaseDate: 'Purchase Date',
    supplierId: 'Supplier',
  };
  const helperText: any = {
    tag: 'e.g. ear notch or ear tag',
  };

  const isDate = /date/i.test(field);

  return {
    control,
    field,
    textField: {
      label: labels[field],
      error: !!errors[field]?.message,
      helperText: errors[field]?.message || helperText[field] || '',
      type: isDate ? 'date' : 'text',
    },
  };
};
