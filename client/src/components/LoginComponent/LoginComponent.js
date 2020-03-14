import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
//-----------------------------------------------------------------------
class Login extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className = {classes.root} elevation={1} justify = "center">
          <Typography variant = "headline" component = "h3" align = "center">
            Log In
          </Typography>
          <h4>{this.props.message}</h4>
          <TextField
            id = "username"
            label = "Username"
            className = {classes.textField}
            margin = "normal"
            fullWidth
            onChange = {this.props.usernameAction}
          />

          <Tooltip title = "Case Sensitive">
            <TextField
              id = "password"
              label = "Password"
              className = {classes.textField}
              type = "password"
              autoComplete = "current-password"
              margin = "normal"
              fullWidth
              onChange = {this.props.passwordAction}
            />
          </Tooltip>

          <Grid container spacing = {8}>
            <Grid item xs = {12} sm = {3} className={classes.buttonStyle}>
              <Button
                size = "large"
                variant = "contained"
                color = "primary"
                onClick = {this.props.submitAction}
              >
                Submit
              </Button>
            </Grid>
            
            <Grid item xs = {12} sm = {3}>
              <Button size = "small" variant = "contained" href = "/signup">
                New User
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);