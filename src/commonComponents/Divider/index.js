import MaterialDivider from "@mui/material/Divider";
import PropTypes from "prop-types";

const Divider = ({ orientation = "horizontal" }) => {
  return <MaterialDivider orientation={orientation} />;
};

Divider.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
};

export default Divider;
