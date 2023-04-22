import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-2">
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-dark"
            style={{ zIndex: "1", left: "50%" }}
          >
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://www.financialexpress.com/wp-content/uploads/2022/10/ipados-16.2.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;
