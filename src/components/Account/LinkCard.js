import React from "react";
import { Button, Typography, Box } from "@material-ui/core";
import { BarChart as ChartIcon } from "@material-ui/icons";
import format from "date-fns/format";



const LinkCard = ({ id, createdAt, name, longURL, shortCode, totalClicks }) => {
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography color="textSecondary" variant="overline">Created at {format(createdAt, "d MMM, HH:mm")}</Typography>
          <Box my={2}>
          <Typography variant="h5">{name}</Typography>
          <Typography>{longURL}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
          <Box mr={3}>
            <Typography color="primary">
              {window.location.host}/{shortCode}
            </Typography></Box>
            <Button color="primary" size="small" variant="outlined">
              Copy
            </Button>
          </Box>
        </Box>

        <Box>
        <Box>
          <Box display="flex" justifyContent="center">
            <Typography>{totalClicks}</Typography>
            <ChartIcon />
          </Box>
        </Box>

        <Box>
          <Typography variant="overline">total Clicks</Typography>
        </Box>
      </Box>
      </Box>

      
     
    </>
  );
};

export default LinkCard;
