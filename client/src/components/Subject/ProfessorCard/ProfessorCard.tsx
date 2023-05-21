import {Card, Grid, Typography} from '@mui/material'
import { SchoolOutlined, Star} from '@mui/icons-material';

type Props = {
    name: string;
    rating: number;
}

export default function ProfessorCard({name = "", rating = 0}: Props) {
    return <Card variant='outlined'>
        <Grid
            container
            display="flex"
            padding={3}
            direction="row"
        >
            <SchoolOutlined color='primary'/>
            <Typography
                variant='body1'
                marginX={1}
            > {name} </Typography>
            <Grid
                display="flex"
                direction="row"
                alignItems="center"
            >
                <Star color='primary'/>
                <Typography variant='body2' paddingX={0.5}>{Math.round(rating*100)/100}</Typography>
            </Grid>

        </Grid>
    </Card>
}