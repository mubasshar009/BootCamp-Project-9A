import React from "react"
import { Container, Box } from "@material-ui/core"
import {store} from '../store'
import { Basket } from "../components/Basket"
import { Product } from "../components/Product"
import {Provider} from 'react-redux'
const ShoppingBasket = () => {
  return (
    <Provider store={store}>
    <Container maxWidth="md">

      <Box mt={5} mb={5}>
        <Product />
      </Box>
      <Box mt={5} mb={5}>
        <Basket />
      </Box>
    </Container>
    </Provider>
  )
}

export default ShoppingBasket
