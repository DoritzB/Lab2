import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {
    const palet = () => {
        alert("lucreaza punctul 8")
    }
        const { onClick } = props;
        const handleClick = () => {
            onClick();
        }
    const handleClicks = () => {
        onClick();
    }
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text" onClick={handleClick}>Text</Button>
            <Button variant="contained" onClick={handleClicks}>Contained</Button>
            <Button onClick={palet} variant="outlined">Outlined</Button>
        </Stack>
    );
}