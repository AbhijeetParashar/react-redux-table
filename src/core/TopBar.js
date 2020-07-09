import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
class TopBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            {this.props.backButtonRequired ? 
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ArrowBackIcon onClick={() => {
              this.props.backClick();
            }}/>
          </IconButton> : null }
            <div className="title">
              {this.props.title}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }


}


const styles = theme => ({
  root: {
    width: '100%',
  },
});
export default withStyles(styles)(TopBar);