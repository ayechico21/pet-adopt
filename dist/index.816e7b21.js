const pet = (props)=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed), 
    ]);
};
const App = ()=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {
            id: "brand"
        }, "Adopt me!!!"),
        React.createElement(pet, {
            name: "dog1",
            animal: "dog",
            breed: "breed1"
        }),
        React.createElement(pet, {
            name: "dog2",
            animal: "dog",
            breed: "breed2"
        }),
        React.createElement(pet, {
            name: "cat1",
            animal: "cat",
            breed: "breed1"
        }), 
    ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

//# sourceMappingURL=index.816e7b21.js.map
