import React from 'react';
import {ScrollView} from 'react-native'
import Product from './Product'
class ProductList extends React.Component{
    state = {
        products: [
            {
                id: 1,
                name: 'Android',
                color:"#81C784",
            },
            {
                id: 2,
                name: 'IOS',
                color:"#FFB74D"
            },
            {
                id: 3,
                name: 'MobilePhone',
                color:"#7986CB"
            }
        ]
    }
    render(){
        const {data} = this.props;
        return(
            <ScrollView>
                {/* {this.state.products.map((obj) => <Product key={obj.id}  text={obj.name} color={obj.color}/>)} */}
                {
                    data.map( obj => <Product 
                                                    key={obj.date} 
                                                    text={obj.text} 
                                                    title={obj.title} 
                                                    views={obj.views} 
                                                    image={obj.image} 
                                                    date={obj.date}/>
                                                )}
            </ScrollView>
        )
    }
}
export default ProductList