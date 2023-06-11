import React from "react";
import { useState, Fragment } from "react";
import { Button, Typography, Box, Grid, Divider } from "@material-ui/core";
import Navbar from "./Navbar";
import LinkCard from "./LinkCard";
const dt = [
  {
    id: "sfsdjfsdj",
    createdAt: new Date(),
    name: "My website",
    longURL: "htts://google.com",
    shortCode: "masdoj",
    totalClicks: 323,
  },
  {
    id: "sfsddfdjfsdj",
    createdAt: new Date(),
    name: "My web",
    longURL: "htts://Yaaho.google.com",
    shortCode: "masdjoj",
    totalClicks: 766,
  },
  {
    id: "sfssdj",
    createdAt: new Date(),
    name: "Gmail",
    longURL: "htts://Gmail.google.com",
    shortCode: "mass",
    totalClicks: 546,
  },
  {
    id: "sfsddffsyudj",
    createdAt: new Date(),
    name: "Doner",
    longURL: "htts://Ya.google.com",
    shortCode: "ghfoj",
    totalClicks: 236,
  },
];

const Account = () => {
  const [links, setLinks] = useState(dt);
  return (
    <>
      <Navbar />
      <Box mt={5}>
        <Grid container justify="center">
          <Grid item xs={8}>
            <Box mb={5} display="flex">
              <Box mr={3}>
                <Typography variant="h4">Links</Typography>
              </Box>
              <Button disableElevation variant="contained" color="primary">
                Create New
              </Button>
            </Box>

            {links.map((link, idx) => (
              <Fragment key={link.id}>
              <LinkCard {...link} />
              {idx !== links.length - 1 && (
              <Box my={4}>
              <Divider />
              </Box>
               )}
              </Fragment>
          
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Account;
