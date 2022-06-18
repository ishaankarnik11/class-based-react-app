import React, { Component } from 'react';
import NewsItem from './NewsItem';
import response from '../data/sampleAPIResponse';
import Spinner from './Spinner';

export default class NewsContainer extends Component {

    constructor(){
        super();
        console.log("constructor");
        // console.log(this.props);
        this.state = {
            // articles: response.articles,
            articles: [],
            loading: false,
            page: 1,
            totalArticles: 0,
            pageSize: 20,
            catagory: ""
        };
    }

    async componentDidMount(){
        
        console.log("componentDidMount");
        await this.setState({pageSize: this.props.pageSize, catagory: this.props.catagory});
        document.title = `News Monkey ${this.capitalizeFirstLetter(this.props.catagory)}`;
        await this.getArticles();
        
    }

    capitalizeFirstLetter = string => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // async componentDidUpdate(){
    //   console.log("componentDidUpdate");
    //   await this.setState({catagory: this.props.catagory});
    //   await this.getArticles();

    // }

    

    handleNextClick = async ()=>{
      console.log("next click");
      await this.setState({loading: true});
      await this.setState({
        page: this.state.page +1
      })
      console.log(this.state.totalArticles);
      await this.getArticles();
      await this.setState({loading: false});
    };

    handlePrevClick = async ()=>{
      await this.setState({loading: true});
      console.log("previous click");
      await this.setState({
        page: this.state.page - 1
      })
      console.log(this.state.page);
      await this.getArticles();
      await this.setState({loading: false});
    }

    async getArticles(){
      let newsURL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=05c66ccf6a944cfe985cdd90f009ac66&page=${this.state.page}&pageSize=${this.state.pageSize}&category=${this.state.catagory}`;
      console.log(newsURL);
      let data = await fetch(newsURL);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults});
      
    }

  render() {
    console.log("render");
    return (
      <div className="news-home">
      <h1 id="news-home--heading" className="display-4 news-home--heading">Top {this.capitalizeFirstLetter(this.props.catagory)} Headlines</h1>
      {this.state.loading && <Spinner />}
      <div className='news-item-container'>
      { !this.state.loading && 
        this.state.articles
        .map((article,index)=>
            <NewsItem 
                key={index} 
                title={article.title} 
                discription={article.description} 
                imgURL={article.urlToImage} 
                newsURL={article.url}
                publishedAt={article.publishedAt}
                author={article.author}
                />
            )
        }
      </div>
      <div className="news-home-buttons my-3 mx-2">
        <button id="news-home-buttons-prev" 
        disabled={this.state.page === 1 ? true : false}
        className="btn btn-dark btn-md news-home-buttons-prev"
        onClick={this.handlePrevClick}>
        &larr; Prev
        </button>
        <button id="news-home-buttons-next" 
        disabled={Math.ceil(this.state.page * this.state.pageSize)>=this.state.totalArticles}
        className="btn btn-dark btn-md news-home-buttons-next"
        onClick={this.handleNextClick}>
        Next &rarr;
        </button>
      </div>
      </div>
    )
  }
}
