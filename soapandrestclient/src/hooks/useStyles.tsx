import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useAppStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "center"
  },
  button: {
    padding: 8,
    margin: 8
  },
  content: {
    display: "flex",
    justifyContent: "space-between"
  }
});

export const useModalStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 800,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    title: {
      textAlign: "center"
    }
  })
);

export const useFormStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      margin: 8,
      padding: 8
    },
    button: {
      margin: 8,
      padding: 8
    }
  })
);

export const useContentStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      margin: 8,
      padding: 8
    },
    button: {
      margin: theme.spacing(1)
    },
    icon: {
      marginLeft: theme.spacing(1)
    }
  })
);
