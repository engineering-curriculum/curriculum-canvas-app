import React from 'react';
import {connect} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

function Header( {curriculum, drawerWidth}) {

  const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow:1,
      textAlign:'left',
    },
    toolbar: theme.mixins.toolbar,
  }));

  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.title} variant="h4">{curriculum.title}</Typography>
      </Toolbar>
    </AppBar>
  );

}

const mapStateToProps = ({ curriculum }) => ({ curriculum });
export default connect(mapStateToProps)(Header);
