import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ProjectsListItem from "../ListItem/ListItem";


export default function BasicList({projectsList}) {
    return (
        <Box sx={{
            width: '100%',
            // maxWidth: 360,
            bgcolor: 'background.paper'
        }}>
            {/*<Divider/>*/}
            <nav aria-label="secondary mailbox folders">
                <List>
                    {projectsList.map(({href, title, description}) =>
                        <ProjectsListItem
                            key={title}
                            href={href}
                            title={title}
                            description={description}
                        />)}
                </List>
            </nav>
        </Box>
    );
}
