import { Avatar, Box, Typography } from '@mui/material';
import React, { ReactElement, FC } from 'react';

export const Profile: FC = (): ReactElement => {
  const avatarSize = '100px';
  const name = 'wild roy';
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        // justifyContent="center"
        alignItems="center"
      >
        <Avatar
          {...stringAvatar(name)}
          {...stringAvatar('Kent hh')}
          sx={{
            width: avatarSize,
            height: avatarSize,
            fontSize: '26px',
            fontWeight: 'bold',
            backgroundColor: 'primary.main',
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
