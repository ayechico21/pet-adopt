import { Component } from "react";

class Carousel extends Component {
  state = { active: 0 };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e) => {
    this.setState({ active: e.target.dataset.id });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animals" />
        <div className="carousel-smaller">
          {images.map((image, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              key={image}
              src={image}
              data-id={index}
              className={index === active ? "active" : ""}
              alt="animal-thumbnails"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
