import styled from '@emotion/styled';
import { Checkbox } from '@mui/material';

export const CommonCheckbox = styled(Checkbox)({
  '&.MuiCheckbox-root': {
    color: '#ccc',
    opacity: 0.8,

    '&.Mui-checked': {
      color: '#ffb039',
    },
  },
});
