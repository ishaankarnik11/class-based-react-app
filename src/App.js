import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsContainer from './components/NewsContainer';


export default class App extends Component {
  name = "ishaan";
  render() {

    return (
      <div>
      <Router>
      <Navbar />
        <div className='container'>
        <Routes>
          <Route path='/' element={<NewsContainer key={1} pageSize="10" catagory="general"/>}/>
          <Route path='/business' element={<NewsContainer key={2} pageSize="10" catagory="business"/>}/>
          <Route path='/entertainment' element={<NewsContainer key={3} pageSize="10" catagory="entertainment"/>}/>
          <Route path='/general' element={<NewsContainer key={1} pageSize="10" catagory="general"/>}/>
          <Route path='/health' element={<NewsContainer key={5} pageSize="10" catagory="health"/>}/>
          <Route path='/science' element={<NewsContainer key={6} pageSize="10" catagory="science"/>}/>
          <Route path='/sports' element={<NewsContainer key={7} pageSize="10" catagory="sports"/>}/>
          <Route path='/technology' element={<NewsContainer key={8} pageSize="10" catagory="technology"/>}/>
        </Routes>
        </div>

        
        </Router>
      </div>
    )
  }
}
