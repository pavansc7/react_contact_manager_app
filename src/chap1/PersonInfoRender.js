function PersonInfoRender ({person}) {
    return (
        <div>
            <h1>{person.name}</h1>
            <h6>Age={person.age}</h6>
            {person.favouriteBikes.map(bike => <li>{bike}</li>)}
        </div>)
    }

export default PersonInfoRender 