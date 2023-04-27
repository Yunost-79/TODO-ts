import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const CommonTextField = styled(TextField)({
  '&.MuiTextField-root': {
    width: "100%",
    height: '100%',
    
  },

  '& .MuiFormLabel-root': {
    top: '-3px',
    width: '100%',
    color: '#ccc',
  },

  '& label.Mui-focused': {
    color: '#ffb039',
  },

  '& .MuiInputBase-input': {
    color: '#fff',
  },

  '& .MuiInputBase-root': {
    width: '100%',
    height: '100%',

    '& fieldset': {
      borderColor: '#ccc',
    },

    '&.Mui-focused fieldset': {
      borderColor: '#ffb039',
    },
  },

  '&:hover': {
    '& .MuiFormLabel-root': {
      // color: '#fff',
      color: '#ffb039',
    },

    '& .MuiInputBase-root': {
      '& fieldset': {
        // borderColor: '#fff',
        borderColor: '#ffb039',
      },
    },
  },
});
