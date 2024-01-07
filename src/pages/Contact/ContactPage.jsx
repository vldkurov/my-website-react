import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

function ContactPage() {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            // minHeight: '100vh',
            justifyContent: 'space-start'
        }}>
            <Typography variant="h2" gutterBottom>
                Contact
            </Typography>
            <Typography paragraph={true}>
                Have an interesting project? I would love to hear about it!
            </Typography>
            <Box sx={{display: 'flex'}}>
                <Link to="https://www.linkedin.com/in/volodymyr-kurov-1a5043253/" target="_blank"
                      rel="noopener noreferrer" style={{marginRight: '30px'}}>
                    <LinkedInIcon sx={{fontSize: 40}}/>
                </Link>
                <Link to="mailto:vokur@icloud.com" target="_blank"
                      rel="noopener noreferrer" style={{marginRight: '30px'}}>
                    <EmailIcon sx={{fontSize: 40}}/>
                </Link>
                <Link to="https://github.com/vldkurov" target="_blank"
                      rel="noopener noreferrer" style={{marginRight: '30px'}}>
                    <GitHubIcon sx={{fontSize: 40}}/>
                </Link>
            </Box>
        </Container>
    );
}

export default ContactPage