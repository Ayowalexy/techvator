import { Box, Heading, useTheme } from "@chakra-ui/react";
import React, { Fragment } from "react";
import Activity from "./Activity";

function Activities() {
  const theme = useTheme();
  const { secondaryBlack } = theme.colors.brand;

  return (
    <Box mt="5rem">
      <Heading fontSize="4xl" mt="2rem">
        Activities
      </Heading>
      {/* List of Activities */}
      <Activity />
      <Activity />
      <Activity />
      <Activity />
      <Activity />
      <Activity />
    </Box>
  );
}

export default Activities;
