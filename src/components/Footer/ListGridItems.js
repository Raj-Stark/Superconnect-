import { List, ListItemText, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { theme } from "../../Theme";

const ListGridItems = ({ title, item1, item2, item3, item4, item5 }) => {
  return (
    <Stack sx={{ fontSize: { xs: "20px" } }}>
      <Typography variant="subtitle1">{title}</Typography>
      <ListItemText>{item1}</ListItemText>
      <ListItemText>{item2}</ListItemText>
      <ListItemText>{item3}</ListItemText>
      <ListItemText> {item4}</ListItemText>
      <ListItemText>{item5}</ListItemText>
    </Stack>
  );
};

export default ListGridItems;
