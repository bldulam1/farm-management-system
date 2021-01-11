import TextField from '@material-ui/core/TextField';
import React from 'react';

export default function SowForm() {
  return (
    <form>
      <TextField
        fullWidth
        label="Sow Tag"
        helperText="e.g. ear notch or ear tag"
      />
      <TextField fullWidth label="Birth Date" />
      <TextField fullWidth label="Breed" />
      <TextField fullWidth label="Generation" />
      <TextField fullWidth label="Is Imported" />
      <TextField fullWidth label="Purchase Date" />
      <TextField fullWidth label="Supplier" />
    </form>
  );
}
