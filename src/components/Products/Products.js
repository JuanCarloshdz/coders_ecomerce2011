import React from 'react'

import products from '../../productData'
import Product from './Product/Produc'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));
const Products = () => {

    const clases = useStyles();
    return (
        <div className={clases.root} >


            <Grid container spacing={3}>
                {products.map((item) => (
                    <Grid 
                        item 
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3} >
                        <Product
                        key={'index-' + item.id}
                        name={item.name}
                        subtitle="In Stock"
                        productType={item.productType}
                        raiting={item.rating}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        id={item.id} />
                    </Grid>
                    
                    ))
                }
            </Grid>

        </div>
    )
}

/**
 * 
 * 
 * 
 */
export default Products
