import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {
    FaAws,
    FaChrome,
    FaCss3Alt,
    FaDatabase,
    FaFigma,
    FaGit,
    FaGithub,
    FaHtml5,
    FaJs,
    FaNodeJs,
    FaNpm,
    FaPython,
    FaReact,
    FaTerminal
} from 'react-icons/fa';

import MediaCard from "../../components/MediaCard/MediaCard";
import TimeContainer from "../../utils/timer";
import BasicList from "../../components/BasicList/BasicList";

import cardPath from '../../static/images/cards/IMG_9347.jpeg'

const projectsList = [
    {
        href: 'https://jammming-orcin.vercel.app',
        title: 'Jammming',
        description: 'Website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.'
    },
    {
        href: 'https://rainbow-florentine-05ce8e.netlify.app',
        title: 'RedditMinimal',
        description: 'Website where people share links to articles, media and other things on the web.'
    },
    // {
    //     href: 'https://the-e-commerce-api.onrender.com/api-docs/',
    //     title: 'The e-commerce API (Back-End)',
    //     description: 'An advanced e-commerce API project that provides a robust platform for inventory management and user authentication, designed to offer a scalable and efficient online shopping experience.'
    // },
    {
        href: 'https://main--thunderous-moxie-f4ffbe.netlify.app/',
        title: 'The e-commerce app',
        description: 'The e-commerce app offers a seamless online shopping experience, enabling users to browse and purchase a wide range of products, tailored by categories, with robust features designed to enhance user satisfaction and streamline the buying process.'
    }
]

function HomePage() {

    return (
        <>
            {/*<Container>*/}
            {/*<Typography variant="h4">About me</Typography>*/}
            {/*<Typography variant="h4">Projects</Typography>*/}
            {/*<Typography variant="h4">Skills</Typography>*/}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box id='about'>
                        <Paper elevation={3} style={{padding: '20px'}}>
                            <Box sx={{display: {md: 'flex'}}}>
                                <Box sx={{flex: {lg: 3, md: 1}, paddingRight: 2}}>
                                    <Typography variant="h4" gutterBottom>
                                        About me
                                    </Typography>
                                    <Typography paragraph={true} sx={{fontSize: '1.2rem'}}>
                                        Self-motivated Full Stack Web Developer, consistently raise the bar on
                                        creativity,
                                        seek
                                        experience in varied platform development frameworks. Strong understanding of
                                        programming
                                        and
                                        full-stack engineering principles. Interpret instruction well and work
                                        collaboratively
                                        to
                                        support
                                        team objectives. Focused on problem-solving and troubleshooting to identify
                                        targeted
                                        solutions.
                                        Proactive, methodical and quick to learn for reliable team support.
                                    </Typography>
                                    <Typography paragraph={true} sx={{fontSize: '1.2rem'}}>
                                        In my free time I like to read about scientific developments,
                                        mathematics, and computational mathematics. I also like to take my
                                        chances of winning big.
                                    </Typography>
                                    <Typography
                                        style={{display: 'flex', flexDirection: 'column'}}
                                        paragraph={true} sx={{fontSize: '1.2rem'}}>
                                        Fun fact!
                                        I've been programing for
                                        <Box
                                            component='span'
                                            style={{fontWeight: 'bold'}}>
                                            {<TimeContainer/>}
                                        </Box> seconds!
                                    </Typography>
                                </Box>
                                <Box sx={{flex: {lg: 1, md: 1}}}>
                                    <MediaCard path={cardPath}/>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box id='projects'>
                        <Paper elevation={3} style={{padding: '20px'}}>
                            <Typography variant="h4" gutterBottom>
                                Projects
                            </Typography>
                            <BasicList projectsList={projectsList}/>
                        </Paper>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box id='skills'>
                        <Paper elevation={3} style={{padding: '20px'}}>
                            <Typography variant="h4" gutterBottom>
                                Skills
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                width: '100%'
                            }}>
                                <FaHtml5 color="orange" size={30}/>
                                <FaCss3Alt color='blue' size={30}/>
                                <FaJs color="red" size={30}/>
                                <FaReact color="blue" size={30}/>
                                <FaAws color="orange" size={30}/>
                                <FaFigma color='purple' size={30}/>
                                <FaGit color="black" size={30}/>
                                <FaChrome color="blue" size={30}/>
                                <FaTerminal color="black" size={30}/>
                                <FaNpm color="red" size={30}/>
                                <FaNodeJs color="green" size={30}/>
                                <FaGithub color="black" size={30}/>
                                <FaPython color="gold" size={30}/>
                                <FaDatabase color="blue" size={30}/>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
            {/*</Container>*/}
        </>
    )
}

export default HomePage
