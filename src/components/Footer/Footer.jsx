import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <Paper
            elevation={3}
            style={{
                padding: '16px',
                textAlign: 'center',
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%',
            }}
        >
            <Typography variant="body2" color="textSecondary">
                Volodymyr Kurov, {currentYear}
            </Typography>
        </Paper>
    );
};

export default Footer;
