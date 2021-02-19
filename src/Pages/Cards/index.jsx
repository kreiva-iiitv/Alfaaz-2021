import React from "react";
import "./Cards.css";
import template from "../../Assets/Asssset 2 3.png";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";



const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#2F1728",
    borderColor: "#2F1728",
    borderRadius:"20px",
    width:"200px",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      backgroundColor: "#2F1728",
      borderColor: "#2F1728",
      boxShadow: "none"

    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#2F1728",
      borderColor: "#2F1728"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  }
})(Button);

const BootstrapButton2 = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#2F1728",
    borderColor: "#2F1728",
    borderRadius:"20px",
    width:"150px",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      backgroundColor: "#2F1728",
      borderColor: "#2F1728",
      boxShadow: "none"

    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#2F1728",
      borderColor: "#2F1728"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  }
})(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: purple
  }
});





function Cards(props){

  const classes = useStyles();
return   <div className = "card">

         <div className="card-main">
         <div className="card-heading"><b>MASK DECORATION</b> </div>
        <div className = "card-content"> Participants have to decorate a simple mask in the most creative and artistic way.
        Participants are free to use any colours and decorating materials like glitters. </div>
        <div className = "card-styles">

           <div className = "sub-heading">Prize worth </div>
           <div className = "content">{props.worth}</div>

        </div>
        <div className = "card-styles">

           <div className = "sub-heading">Venue</div>
           <div  className = "content">{props.venue}</div>

        </div>
        <div className = "card-styles">

           <div className = "sub-heading">Date and Time </div>
           <div className = "content">{props.date}</div>

        </div>
        <div className = "card-styles">

           <div className="sub-heading">Convenor </div>
           <div className = "content">{props.convenor}</div>

        </div>
        <div className = "card-styles">

           <div className="sub-heading">Co-convenor </div>
           <div className = "content">{props.coconvenor}</div>
}
        </div>
        <div className = "card-styles">

           <div className="sub-heading">Members </div>
           <div className = "content">{props.members}</div>

        </div>

        <div className = "button">
        <div className = "button1" > <BootstrapButton
        variant="contained"
        color="primary"
        disableRipple
        className={classes.margin}
      >
        Rules and Regulations
      </BootstrapButton>
    </div>
        <div className = "button2"> <BootstrapButton2
        variant="contained"
        color="primary"
        disableRipple
        className={classes.margin}
      >
        Register
      </BootstrapButton2>
        </div>
        </div>



         </div>




   </div>


}


export default Cards;
