import * as React from "react";
import {NavLink} from 'react-router-dom';
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import {Link as MaterialLink} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


function ProjectsListItem({href, title, description}) {

    const [isActive, setIsActive] = React.useState(false)

    function arrowHandler() {
        setIsActive(!isActive);
    }

    return (
        <ListItem disablePadding>
            <Box sx={{display: 'flex'}}>
                <ArrowRightIcon onClick={() => {
                    arrowHandler()
                }}/>
                <Box sx={{display: 'block'}}>
                    <MaterialLink
                        component={NavLink}
                        to={href}>
                        <ListItemText primary={title} style={{fontSize: '1.5rem'}}/>
                    </MaterialLink>
                    {isActive &&
                        <Typography paragraph={true}>
                            {description}
                        </Typography>}
                </Box>
            </Box>
        </ListItem>
    )
}

export default ProjectsListItem