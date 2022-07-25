const Pet = ({ name, animal, breed, images, id }) => {
  let img = "http://pet-images.dev-apis.com/pets/none.jpg";
  if (images.length) img = images[0];

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={img} alt={name}></img>
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal}-{breed}
        </h2>
      </div>
    </a>
  );
};
export default Pet;
