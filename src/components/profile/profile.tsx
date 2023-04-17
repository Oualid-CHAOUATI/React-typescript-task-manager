import { Avatar, Box, Typography } from '@mui/material';
import React, { ReactElement, FC } from 'react';

import PropTypes from 'prop-types';

interface IProps {
  name: string;
}

export const Profile: FC<IProps> = ({
  name = 'Walid CHWT',
}): ReactElement => {
  const avatarSize = '100px';

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Avatar
          {...stringAvatar(name)}
          sx={{
            width: avatarSize,
            height: avatarSize,
            fontSize: '26px',
            fontWeight: 'bold',
            backgroundColor: 'primary.main',
            textTransform: 'uppercase',
          }}
        />
        <Typography
          variant="h4"
          component="p"
          color="text.primary"
          marginTop=".7em"
        >
          Welcome ,<Box component="span">{name}</Box>
        </Typography>
        <Typography fontSize="20px" mt={2}>
          This is your personal task manager
        </Typography>
      </Box>
    </>
  );
};

function stringAvatar(name: string) {
  const _name = name.trim().split(' ');
  let finalName = _name[0][0];

  if (_name.length > 1) {
    finalName += _name[1][0];
  }
  return {
    // sx: {
    //   bgcolor: stringToColor(name),
    // },
    children: finalName,
  };
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};
