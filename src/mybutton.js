import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
    const palet = () => {
        alert("lucreaza punctul 8")
    }
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button onClick={palet} variant="outlined">Outlined</Button>
        </Stack>
    );
}