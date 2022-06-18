import React, { Component } from 'react'


export class NewsItem extends Component {


  render() {
    let { title, discription, imgURL, newsURL, publishedAt, author } = this.props;

    return (
      <div className="card mx-2 my-2" style={{ "width": "18rem" }}>
        <img src={imgURL === null || imgURL === "" ? "https://thefederal.com/wp-content/uploads/2022/04/Mars.jpg" : imgURL} className="card-img-top news-image" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"><small>Date: {new Date(publishedAt).toGMTString()}</small></p>
          <p className="card-text"><small>By: {author === null || author === "" ? "Unknown" : author}</small></p>
          <p className="card-text">{discription}</p>
        </div>
        <div className="card-footer">
          <a href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem