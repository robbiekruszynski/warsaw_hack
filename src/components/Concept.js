import { Typography, Box, } from "@mui/material";
// import { coloring } from "../GlobalTheme";

const Concept = () => {
    // const theme = useTheme();
    // const colors = coloring(theme.palette.mode);
    return (
        <Box>
            <Typography variant="h6" component="h4" gutterBottom padding={"50px 50px 50px 50px"}>
            Valspin is an application that sells insurance contracts and swaps to guarantee fixed yields for sets of validators over fixed periods of time. An entity that owns several validators may desire to have a fixed return or one with a lower yield, hedging away the inherent stochastic risk.
Below is a distribution of staking returns for an entity that owns 100 validators over 100 days. Over 10,000 trials, we can see a wide range of returns centered around an average of 41.88 ETH with a standard deviation of 1.65 ETH. The full range covers 36.23 ETH to 48.80 ETH, showing the stochastic risk faced by validator owners, especially those with few validators.
            </Typography>
        </Box>
    )
}

export default Concept;