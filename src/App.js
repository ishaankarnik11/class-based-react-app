import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsContainer from './components/NewsContainer';
import TopLoader from './components/TopLoader';


export default class App extends Component {
  name = "ishaan";

  constructor()
  {
    super();
    this.state = {
        loaderWidth: "0",
        loaderHeight: "0"
    }
  }

  updateLoaderWidth = (loaderNewWidth, loaderNewHeight) =>{
    this.setState({loaderWidth: loaderNewWidth, loaderHeight: loaderNewHeight});
  }

  render() {

    return (
      <div>
      <Router>
      <TopLoader height={this.state.loaderHeight} width={this.state.loaderWidth} color="red"/>
      <Navbar />
        <div className='container'>
        <Routes>
          <Route path='/' element={<NewsContainer updateLoaderWidth={this.updateLoaderWidth} key={1} pageSize="10" catagory="general"/>}/>
          <Route path='/business' element={<NewsContainer updateLoaderWidth={this.updateLoaderWidth} key={2} pageSize="10" catagory="business"/>}/>
          <Route path='/entertainment' element={<NewsContainer updateLoaderWidth={this.updateLoaderWidth} key={3} pageSize="10" catagory="entertainment"/>}/>
          <Route path='/general' element={<NewsContainer updateLoaderWidth={this.updateLoaderWidth} key={1} pageSize="10" catagory="general"/>}/>
          <Route path='/health' element={<NewsContainer updateLoaderWidth={this.updateLoaderWidth} key={5} pageSize="10" catagory="health"/>}/>
          <Route path='/science' element={<NewsContainer updateLoaderWidth={this.updateLoaderWidth} key={6} pageSize="10" catagory="science"/>}/>
          <Route path='/sports' element={<NewsContainer updateLoaderWidth={this.updateLoaderWidth} key={7} pageSize="10" catagory="sports"/>}/>
          <Route path='/technology' element={<NewsContainer updateLoaderWidth={this.updateLoaderWidth} key={8} pageSize="10" catagory="technology"/>}/>
        </Routes>
        </div>

        
        </Router>
      </div>
    )
  }
}
