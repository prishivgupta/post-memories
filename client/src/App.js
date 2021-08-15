import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import memories from "./images/memories.png";  
import useStyles from "./styles";
import { listPosts } from "./actions/postActions";

function App() {

  const classes = useStyles();

  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {

    dispatch(listPosts());
    
  }, [currentId, dispatch])

  return (
    
    <Container maxWidth="lg">

      <AppBar className={classes.appBar} position="static" color="inherit">

        <Typography className={classes.heading} variant="h2" align="center">MEMORIES</Typography>

        <img className={classes.image} src={memories} alt="memories" height="60" />

      </AppBar>

      <Grow in>

        <Container>

          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>

            <Grid item xs={12} sm={7}>

              <Posts setCurrentId={setCurrentId}/>
              
            </Grid>

            <Grid item xs={12} sm={4}>

              <Form currentId={currentId} setCurrentId={setCurrentId}/>
              
            </Grid>

          </Grid>

        </Container>

      </Grow>

    </Container>

  );

}

export default App;