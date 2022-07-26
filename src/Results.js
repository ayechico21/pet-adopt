import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (
        <h1>No Pets Found!!!!</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            description={pet.description}
            key={pet.id}
            images={pet.images}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
