import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Location } from '../interfaces/characterInterfaceAPI';

interface CharacterCardProps {
  name: string;
  image: string;
  status: string;
  location: Location;
}
export const CharacterCard = ({
  name,
  image,
  status,
  location,
}: CharacterCardProps) => {
  return (
    <>
      <Card sx={{ width: 345 }}>
        <CardMedia sx={{ height: 300 }} image={image} title={name} />
        <Box
          sx={{
            backgroundColor:
              status === 'Alive'
                ? '#039487'
                : status === 'Dead'
                  ? '#ff2c2c'
                  : '#edb95e',
          }}
        >
          <Typography variant="body1" color="white" ml={2}>
            {status}
          </Typography>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Last location
          </Typography>
          <Typography mt={1} variant="body1" sx={{ color: 'text.secondary' }}>
            {location.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};
