import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

interface CharacterCardProps {
  name: string
  image: string
}
export const CharacterCard = ({name, image}: CharacterCardProps) => {
  return (
    <>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  )
}