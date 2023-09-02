import { Box, Typography, useTheme } from "@mui/material";
import { coloring } from "../../GlobalTheme";
import Pie from "./Pie";

const Stat = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = coloring(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.gray[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Pie progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.green[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.green[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default Stat;