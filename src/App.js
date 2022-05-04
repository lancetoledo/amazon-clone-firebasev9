import { useState, useEffect } from 'react'
import './App.css';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import styled from 'styled-components'
import Header from './Header';


function App() {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  // const [cartItems, setCartItems] = useState([]);

  // const getCartItems = () => {
  //   db.collection('cartItems').onSnapshot((snapshot) => {
  //     const tempItems = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       product: doc.data()
  //     }))

  //     setCartItems(tempItems);
  //   })
  // }

  // const signOut = () => {
  //     auth.signOut().then(()=>{
  //         localStorage.removeItem('user')
  //         setUser(null)
  //     })
  // }

  // useEffect(() => {
  //   getCartItems();
  // }, [])


  return (
    // <Router>
    //   {
    //     !user ? (
    //       <Login setUser={setUser} />
    //     ) : (
    //       <Container>
    //         <Header 
    //           signOut={signOut}
    //           user={user} 
    //           cartItems={cartItems} />

    //         <Switch>

    //           <Route path="/cart">
    //             <Cart cartItems={cartItems} />
    //           </Route>

    //           <Route path="/">
    //             <Home />
    //           </Route>

    //         </Switch>
    //       </Container>
    //     )
    //   }
    // </Router>
    <div>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
`
