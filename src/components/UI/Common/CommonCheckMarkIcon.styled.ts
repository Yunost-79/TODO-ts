import styled from '@emotion/styled';

import CheckIcon from '@mui/icons-material/Check';

export const CommonCheckMarkIcon = styled(CheckIcon)({
    cursor: 'pointer',
    color: '#ccc',
    // opacity: 0.7,
    transition:'0.2s linear',
  

  '&:hover': {
    color:'#55FF33'
  },
});
