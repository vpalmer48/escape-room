import CircleIcon from '@mui/icons-material/Circle';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';

const DotLight = styled(Badge)`
    & .${badgeClasses.badge} {
        top: 0px;
        right: 10px;
    }
    `;

export default function CirlceDot({letter, handleClick, selectedLetter}) {

    

  return (
    <IconButton onClick={handleClick}>
      <CircleIcon fontSize="small" />
      <DotLight badgeContent={letter} color="primary" overlap="circular"  />
    </IconButton>
  );
}