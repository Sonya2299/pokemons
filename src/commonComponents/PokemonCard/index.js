import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { stylesBtn, cardView, stylePrice, stylesBtnMore } from "./styles";

const PokemonCard = ({
  id,
  image,
  name,
  price,
  handleAddToCart,
  handleLearnMore,
}) => {
  return (
    <Card sx={cardView}>
      <CardMedia sx={{ height: 200 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={stylePrice}>
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={stylesBtn}
          onClick={() =>
            handleAddToCart({ id, image, name, price, quantity: 1 })
          }
        >
          Add to Cart
        </Button>
        <Button
          size="small"
          onClick={() => handleLearnMore(id)}
          sx={stylesBtnMore}
        >
          More
        </Button>
      </CardActions>
    </Card>
  );
};

export default PokemonCard;
