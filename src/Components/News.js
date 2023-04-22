import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  };

  capital = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `NeelNews - ${this.capital(this.props.category)}`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7eb041d940a24c91a893b20772943adc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    await this.updateNews();
  }

  handlePrevClick = async () => {
    await this.setState({ page: this.state.page - 1 });
    await this.updateNews();
  };

  handleNextClick = async () => {
    await this.setState({ page: this.state.page + 1 });
    await this.updateNews();
  };

  render() {
    return (
      <div className="container my-2">
        <h1 className="text-center mb-3"> {this.capital(this.props.category)} - Headlines</h1>

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark mx-2"
            onClick={this.handlePrevClick}
          >
            &#11144; Previous
          </button>
          {this.state.loading && <Spinner />}
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &#11146;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
