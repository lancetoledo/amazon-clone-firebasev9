import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product';
import { onSnapshot,collection } from 'firebase/firestore';
import db from './utils/firebase';

function Home() {
    const [products, setProducts] = useState([])

    // const getProducts = () => {
    //     db.collection('products').onSnapshot((snapshot) => {
    //         let tempProducts = []
    //         tempProducts = snapshot.docs.map((doc) => (
    //             {
    //                 id: doc.id,
    //                 product: doc.data()
    //             }
    //         ));
    //         setProducts(tempProducts);
    //     })
    // }

    // useEffect(()=>{
    //     console.log("Call products");
    //     getProducts()
    // }, [])

    useEffect(()=> {
        const unsub = onSnapshot(collection(db,"products"), (snapshot)=> {
          let fbProducts = snapshot.docs.map((doc)=> ({...doc.data(), id:doc.id}))
          setProducts(fbProducts)
        })
    
        // Clean up function when the component unmounts remove the sideEffect
        return unsub
    
      }, [])

console.log(products)
    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                {
                    products.map((data)=>(
                        <Product 
                            title={data.name}
                            price={data.price}
                            rating={data.rating}
                            image={data.image}
                            id={data.id}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`

const Banner = styled.div`
    background-image: url('https://i.imgur.com/SYHeuYM.jpg');
    min-height: 600px;
    background-position: center;
    background-size: cover;
    z-index: 1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    display: flex;
    flex-wrap:wrap;
`
