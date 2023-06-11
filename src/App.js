import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import Account from "./components/Account";
import Home from "./components/Home";
import { ThemeProvider, CircularProgress, Box } from "@material-ui/core";
import theme from "./theme";
import { auth } from "./firebase";


const App = () => {
const [user,setUser] = useState(null)
const [initialLoad, setInitialLoad]=useState(true)

useEffect(()=>{
  auth.onAuthStateChanged((user) =>{
    setUser(user);
    setInitialLoad(false)
  })
  
}, [])
console.log(user);



if(initialLoad) return(
  <Box mt={5} display="flex" justifyContent="center">
    <CircularProgress/>
  </Box>
)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path="/">
          {user?<Redirect to="/account"/>: <Home />}
        </Route>
        <Route path="/account">
          {user ? <Account />: <Redirect to="/"/>}
        </Route>
      </Router>
    </ThemeProvider>
  );
};
export default App;
