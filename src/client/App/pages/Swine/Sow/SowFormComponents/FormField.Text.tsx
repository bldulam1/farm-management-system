import Grid from '@material-ui/core/Grid';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { SowInput } from '../../../../../queries/autogenerate/schemas';

export interface FormFieldTextProps {
  field: keyof SowInput;
  control: Control<SowInput>;
  textField: TextFieldProps;
}

const toNativeDate = (value: any) => {
  const date = value ? new Date(value) : new Date();
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  return [yyyy, mm, dd].map((v) => (v < 10 ? `0${v}` : v)).join('-');
};

export default function FormFieldText(props: FormFieldTextProps) {
  const { control, textField, field } = props;

  const isDate = textField.type === 'date';

  return (
    <Grid item xs={12}>
      <Controller
        name={field}
        defaultValue={control.defaultValuesRef.current[field]}
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextField
            fullWidth
            value={!isDate ? value || '' : toNativeDate(value)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props.textField}
            onBlur={onBlur}
            onChange={(e) =>
              onChange(
                !isDate
                  ? e.target.value
                  : new Date(e.target.value).toISOString(),
              )
            }
          />
        )}
      />
    </Grid>
  );
}
