import { Grid } from "@material-ui/core";
import React from "react";

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props {
  items: Item[];
}

const Content: React.FC<Props> = ({ items }) => {
  return (
    <Grid container justify="center" direction="column">
      {items.map(item => (
        <Grid item key={item.id}>
          ID: {item.id} Name: {item.name} description: {item.description} price:{" "}
          {item.price}
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;
