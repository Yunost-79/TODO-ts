import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const CommonButton = styled(Button)({
  '&.MuiButtonBase-root': {
    height: '100%',
    padding: '10px 30px',
    borderRadius: '5px',
    color: '#ccc',
    border: '2px solid #ccc',
    fontSize: '14px',
    backgroundColor: 'rgba(163, 163, 163, 0.05)',
    whiteSpace: 'nowrap',
  },

  '&:hover': {
    '&.MuiButtonBase-root': {
      backgroundColor: 'rgba(163, 163, 163, 0.15)',
      color: '#ffb039',
      border: '2px solid #ffb039',
    },
  },

  '& .MuiTouchRipple-root': {
    color: '#ffb039',
  },
});
