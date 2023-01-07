import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ImageCard({ data }) {
    // console.log("props", props);
    return (
        <Card
        raised={false}
        //sx={{ maxWidth: 400 }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    minWidth="800"
                    image={data.imageUrl}
                    alt={data.description}
                />
                <CardContent>
                    <Typography textAlign={"center"} gutterBottom variant="h5" component="div">
                        {data.header}
                    </Typography>
                    <Typography textAlign={"center"} variant="body2" color="text.secondary">
                        {data.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}