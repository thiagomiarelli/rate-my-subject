import React, { useState } from "react";
import {Button, Grid, Typography} from "@mui/material";

type Props = {
    text: string;
    maxCharCount: number;
}

declare module '@mui/material/styles' {
    interface Palette {
      neutral: Palette['primary'];
    }
  
    // allow configuration using `createTheme`
    interface PaletteOptions {
      neutral?: PaletteOptions['primary'];
    }
  }
  
  // Update the Button's color prop options
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      neutral: true;
    }
}

export default function ReadMore({text = "", maxCharCount = 100}: Props) {
    const [readMore, setReadMore] = useState(false);

    function expandOrCollapse() {
        setReadMore(!readMore);
    }
    return (
        <>
            <Typography
                variant="body2"
                color="#5c5c5c"> {readMore ? text : `${text.substring(0, maxCharCount)}...`} </Typography>
            <Grid
            container
            justifyContent="flex-start"
            >
                <Button color="neutral" size="small" onClick={expandOrCollapse}
                 >{readMore ? "Ler menos" : "Ler Mais"}</Button>
            </Grid>
        </>
    )
}