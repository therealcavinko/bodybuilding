import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './index.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import ChartsPie from './../ChartsPie';
//------------------------------------------------------------
const styles = {
  cardUser: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop:  "5%",
    marginBottom: "25%"
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  card: {
    marginTop: 11,
    display: 'flex'
  },
    content: {
    flex: '1 0 auto'
  },
  button: {},
  input: {
    display: 'none'
  },
  divStyle: {
    padding: 14
  },
  root: {
    flexGrow: 1,
    marginBottom: "5%"
  },
  gridContainer: {
    marginTop: 2
  },
  paper: {
    textAlign: 'center'
  },
  exerciseButton: {
    backgroundColor: '#ea6192b5'
  },
  exerciseAvatar: {
    backgroundColor: '#825eb9b5',
    width: '46px',
    height: '46px',
    margin: '5%',
    marginLeft: "17%"
  },
  tableCellStyle: {
    padding: 0
  },
  nameTitle: {
    marginTop: "8%"
  }
};
//---------------------------------------------------------------------
//https://v3.material-ui.com/api/table-cell/ learn how to use tablecell to customize my page. Learned to use props and components
class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className = {classes.cardUser}>
          <CardContent>
  
            <Typography className = {classes.root} variant = "display3" align = "center">
              DashBoard
            </Typography>
            <Grid container spacing = {0}>
              <Grid item xs = {12} sm = {6}>
                <ChartsPie
                  exerciseChart = {this.props.exercise}
                />
              </Grid>
              <Grid item xs = {12} sm = {6}>
                <Typography
                  gutterBottom
                  variant = "headline"
                  component = "h2"
                  align = "center"
                  className = {classes.nameTitle}
                >
                  {this.props.firstName} {this.props.lastName}
                </Typography>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className = {classes.tableCellStyle} variant = "body2">
                        Exercise (Time)
                      </TableCell>
                      <TableCell className = {classes.tableCellStyle} variant = "body2">
                        {this.props.exercise}
                      </TableCell>
                      <TableCell className = {classes.tableCellStyle}>
                        <Tooltip title = "Go to Exercise Page" placement = "right" variant = "body2">
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}
// https://material-ui.com/components/typography/ typography used to make the title of the page pop out
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);