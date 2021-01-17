/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { useSnackbar } from 'notistack';
import React, { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useCreateSowMutation } from '../../../../queries/autogenerate/hooks';
import { SowInput } from '../../../../queries/autogenerate/schemas';
import { SowContext } from './Sow.Context';
import FormFieldText from './SowFormComponents/FormField.Text';
import { getProps, sowSchema, sowSchemaDefaults } from './SowFormComponents/sowForm.utils';

export default function SowForm() {
  const { enqueueSnackbar } = useSnackbar();
  const sowCtx = useContext(SowContext);

  const { control, handleSubmit, errors, reset } = useForm<SowInput>({
    resolver: yupResolver(sowSchema),
    defaultValues: sowSchemaDefaults,
  });

  const [createSow] = useCreateSowMutation();

  const onSubmit = (data: SowInput) => {
    createSow({ variables: { input: data } }).then((res) => {
      const id = res.data?.sowCreate._id;
      if (id) {
        const message = `Created new sow with id ${id}`;
        enqueueSnackbar(message, { variant: 'success' });
        sowCtx.query.refetch();
        reset();
      }
    });
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button size="small" onClick={() => setOpen(true)}>
        Add
      </Button>
      <Dialog open={open}>
        <DialogTitle>New Sow Form</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Grid container spacing={2} justify="flex-end">
              <FormFieldText {...getProps('tag', control, errors)} />
              <FormFieldText {...getProps('birthDate', control, errors)} />

              <FormFieldText {...getProps('generation', control, errors)} />
              <FormFieldText {...getProps('breed', control, errors)} />

              <Controller
                control={control}
                name="isImported"
                render={({ onChange, onBlur, value }) => (
                  <>
                    <Grid item xs={12}>
                      <FormControlLabel
                        value={!!value}
                        onChange={() => {
                          const newValue = !value;
                          onChange(newValue);
                        }}
                        control={<Checkbox color="primary" />}
                        label="Is purchased?"
                        onBlur={onBlur}
                        labelPlacement="end"
                      />
                    </Grid>

                    {value && (
                      <>
                        <FormFieldText
                          {...getProps('purchaseDate', control, errors)}
                        />
                        <FormFieldText
                          {...getProps('supplierId', control, errors)}
                        />
                      </>
                    )}
                  </>
                )}
              />
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} size="small">
              Close
            </Button>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              size="small"
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
