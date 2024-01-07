import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function MediaCard({path}) {
    return (
        <Card
            style={{maxWidth: '100%'}}
        >
            <CardMedia
                component="img"
                aspectRatio="auto"
                image={path}
                title="Volodymyr Kurov"
            />
        </Card>
    );
}
