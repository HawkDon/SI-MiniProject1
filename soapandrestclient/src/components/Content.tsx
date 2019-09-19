import { Grid } from "@material-ui/core";
import React from "react";
import { IAnimal } from "../services/Rest";
import { ISoap } from "../services/Soap";

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props {
  items: IAnimal[] | ISoap[];
}

const Content: React.FC<Props> = ({ items }) => {
  return (
    <Grid container justify="center" direction="column">
      {(items as any).map(item => (
        <Grid item key={item.id}>
          ID: {item.id} Name: {item.name} description: {item.description} Sleep:{" "}
          {item.dailySleep}
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;
