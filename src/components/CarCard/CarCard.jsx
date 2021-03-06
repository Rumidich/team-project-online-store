import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { carsContext } from "../../contexts/cars.Context";
import { useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { cartContext } from "../../contexts/cartContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Rate } from "antd";

export default function CarCard({ item }) {
  const { deleteCar } = React.useContext(carsContext);
  const { addToCart, checkCarInCart } = React.useContext(cartContext);
  const navigate = useNavigate();
  const [carState, setCarState] = React.useState(checkCarInCart(item.id));
  const [fav, setFav] = React.useState(false);

  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

  return (
    <Box className="card">
      <Card
        className="card"
        sx={{
          margin: "20px",
          flexWrap: "wrap",
          textAlign: "center",
        }}>
        <CardMedia
          style={{ height: "20vh" }}
          component="img"
          image={item.image}
          alt="car"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {item.price} €
          </Typography>
        </CardContent>

        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Rate
            defaultValue={3}
            character={({ index }) => customIcons[index + 1]}
          />

          {!fav && (
            <IconButton
              onClick={() => {
                setFav(!fav);
              }}
              aria-label="delete"
              color="secondary">
              <FavoriteBorderIcon></FavoriteBorderIcon>
            </IconButton>
          )}
          {fav && (
            <IconButton
              onClick={() => {
                setFav(!fav);
              }}
              aria-label="delete"
              color="error">
              <FavoriteIcon></FavoriteIcon>
            </IconButton>
          )}
        </Box>
        <CardActions>
          <Button
            size="small"
            sx={{ color: "red" }}
            onClick={() => deleteCar(item.id)}>
            Delete
          </Button>
          <Button
            size="small"
            sx={{ color: "magenta" }}
            onClick={() => navigate(`/edit/${item.id}`)}>
            Update Info
          </Button>
          <Button
            size="small"
            sx={{ color: "lawngreen" }}
            onClick={() => navigate(`/details/${item.id}`)}>
            Details
          </Button>
          <IconButton
            onClick={() => {
              addToCart(item);
              setCarState(checkCarInCart(item.id));
            }}>
            <AddShoppingCartIcon color={carState ? "secondary" : "warning"} />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
