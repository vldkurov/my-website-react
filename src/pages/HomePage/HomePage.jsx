import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import cardPath from '../../static/images/cards/IMG_9347.jpeg'
import MediaCard from "../../components/MediaCard/MediaCard";
import TimeContainer from "../../utils/timer";

function HomePage() {

    // const cardPath = '../../../static/images/cards/IMG_9347.jpeg'

    return (
        <>
            {/*<Container>*/}
            {/*<Typography variant="h4">About me</Typography>*/}
            {/*<Typography variant="h4">Projects</Typography>*/}
            {/*<Typography variant="h4">Skills</Typography>*/}
            <Grid container spacing={2}>
                {/* Section 1 */}
                <Grid item xs={12}>
                    <Paper elevation={3} style={{padding: '20px'}}>
                        <Box sx={{display: {md: 'flex'}}}>
                            <Box sx={{flex: {lg: 3, md: 1}, paddingRight: 2}}>
                                <Typography variant="h4" gutterBottom>
                                    About me
                                </Typography>
                                <Typography paragraph={true} sx={{fontSize: '1.2rem'}}>
                                    Self-motivated Full Stack Web Developer, consistently raise the bar on creativity,
                                    seek
                                    experience in varied platform development frameworks. Strong understanding of
                                    programming
                                    and
                                    full-stack engineering principles. Interpret instruction well and work
                                    collaboratively
                                    to
                                    support
                                    team objectives. Focused on problem-solving and troubleshooting to identify targeted
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
                                        // paddingLeft={1}
                                        //  paddingRight={1}
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
                </Grid>

                {/* Section 2 */}
                <Grid item xs={12}>
                    <Paper elevation={3} style={{padding: '20px'}}>
                        <Typography variant="h4" gutterBottom>
                            Projects
                        </Typography>
                        <Typography>
                            Content for section 2 goes here.
                        </Typography>
                    </Paper>
                </Grid>

                {/* Section 3 */}
                <Grid item xs={12}>
                    <Paper elevation={3} style={{padding: '20px'}}>
                        <Typography variant="h4" gutterBottom>
                            Skills
                        </Typography>
                        <Typography>
                            Content for section 3 goes here.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            {/*</Container>*/}
        </>
    )
}

export default HomePage