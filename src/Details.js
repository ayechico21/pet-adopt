/* import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return <h1>how you Doinggg!!!!!! {id}</h1>;
};

export default Details;
 */

import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
class Details extends Component {
  /* constructor(props) {
    super(props);
    this.state = { loading: true };
  } */

  state = { loading: true };
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();

    this.setState({ loading: false, ...json.pets[0] });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading.....</h1>;
    }

    const { name, animal, breed, description, images } = this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal}-{breed}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  return <Details params={params} />;
};

export default WrappedDetails;
