import styled from '@emotion/styled';

import CloseIcon from '@mui/icons-material/Close';

export const CommonCloseIcon = styled(CloseIcon)({
    cursor: 'pointer',
    color: '#ccc',
    // opacity: 0.7,
    transition:'0.2s linear',
  

  '&:hover': {
    color:'#D0342C'
  },
});
