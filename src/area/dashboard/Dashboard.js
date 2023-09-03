import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { coloring } from "../../GlobalTheme";
import { mockTransactions } from "../../components/placeHolderData/PlaceHolderData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Header from "../../components/Header";
import Line from "../../components/data/Line";
// import Geo from "../../components/data/Geo";
import Bar from "../../components/data/Bar";
import Stat from "../../components/data/Stat";
// import ReceiptIcon from '@mui/icons-material/Receipt';


const Dashboard = () => {
  const theme = useTheme();
  const colors = coloring(theme.palette.mode);

  return (
    <Box m="20px">
      
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Overview" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.lime[200],
              color: colors.gray[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

     
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
      
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Stat
            title="27"
            subtitle="Invoices sent this month"
            progress="0.75"
            increase="+8%"
            icon={
              <EmailIcon
                sx={{ color: colors.green[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Stat
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.green[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Stat
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.green[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
     

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.gray[100]}
              >
                Yield over Time Reward/Stake
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.green[500]}
              >
              </Typography>
            </Box>
           

            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.green[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          {/* mapping */}

          <Box height="250px" m="-20px 0 0 0">
            <Line isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.gray[100]}
            p="15px"
          >
            <Typography color={colors.gray[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.lime[800]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.gray[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.gray[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.lime[300]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        </Box>
        <Box
          sx={{ m: "-10" }}
          gridColumn="span 12"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 30px 30px" }}
          >
            Bar example
          </Typography>
          <Box height="250px" mt="-20px 0 0 ">
            <Bar isDashboard={true} />
          </Box>
        </Box>
    
      </Box>
    
  );
};

export default Dashboard;

