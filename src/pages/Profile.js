import React from 'react';
import {Avatar, Box, Card, Stack, Typography} from "@mui/material";

function Profile(props) {
    return (<Card>
        <Box sx={{p: 2, display: 'flex'}}>
            <Avatar variant="rounded" src={props.profile.picture.medium}/>
            <Stack spacing={0.5}>
                <Typography fontWeight={700}>{`${props.profile.name.first} ${props.profile.name.last}`}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.profile.email}
                </Typography>
            </Stack>
        </Box>
    </Card>);
}
 export default Profile;
