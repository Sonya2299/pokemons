import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useCart } from "hooks";

const BadgeIkon = () => {
  const { cartItemsQuantity } = useCart();

  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={cartItemsQuantity} color="success">
        <ShoppingCartIcon sx={{ color: "white" }} />
      </Badge>
    </IconButton>
  );
};

export default BadgeIkon;
