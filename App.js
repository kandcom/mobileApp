import React from 'react'
import ProductList from './src/components/ProductList'
class App extends React.Component{
  state = {
    articles: []
  }
  componentDidMount = () => {
    return fetch('http://5d30134f28465b00146aab42.mockapi.io/posts')
              .then( res => res.json())
              .then( artJSON => {
                this.setState({
                  articles: artJSON
                })
              })
  }
  render(){
    // {console.log(this.state.articles)}
    return (
      <ProductList data={this.state.articles}/>
    )
  }
}
function reqToServer(url){
  fetch(url)
  .then(res => {
    console.log('first');
    console.log(res)
    return res.json()
  })
  .then(json => console.log(json))
}
//http://5d30134f28465b00146aab42.mockapi.io/posts
export default App