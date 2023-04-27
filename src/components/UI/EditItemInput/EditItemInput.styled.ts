import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const EditTextField = styled(TextField)({
  '&.MuiTextField-root': {
    width: '100%',
    bottom: '5px',
  },

  '& .MuiFormLabel-root': {
    color: '#fff',
    fontSize: '16px',
  },

  '& label.Mui-focused': {
    color: '#ffb039',
  },
  '& .MuiInputBase-input': {
    color: '#fff',
    fontSize: '16px',
  },

  '& .MuiInput-underline:before': { borderBottomColor: '#ccc' },
  '& .MuiInput-underline:after': { borderBottomColor: '#ffb039' },

  '&:hover': {
    '& .MuiInput-underline:after': { borderBottomColor: '#ffb039' },
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: '#fff',
  },
});
