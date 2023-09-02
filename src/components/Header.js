import { Typography, Box, useTheme } from "@mui/material";
import { coloring } from "../GlobalTheme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = coloring(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.gray[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.green[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;