import React from 'react';

class AffiliationItemRow extends React.Component {
  render() {
    return (
      <li>
        {this.props.item}
      </li>
    )
  }
}

class StarWars2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false,
      image: "url",
      name: null,
      species: null,
      homeworld: null,
      masters: [],
      apprentices: [],
      affiliations: [],
    }
  }

  getNewCharacter() {
    const randNum = Math.ceil(Math.random() * 88);
    const url = `https://akabab.github.io/starwars-api/api/id/${randNum}.json`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loaded: true,
          image: data.image,
          name: data.name,
          species: data.species,
          homeworld: data.homeworld,
          masters: data.masters,
          apprentices: data.apprentices,
          affiliations: data.affiliations,
        })
      })
  }

  render() {

    const affiliations = this.state.affiliations.map((item, i) => {
      return <AffiliationItemRow key={i} item={item} />
    })

    return (
      <div>
        {
          this.state.loaded &&
          <div>
              <div>
                <img className="character" src={this.state.image} alt={this.state.name + " Image"} />
              </div>
              <h1>{this.state.name}</h1>
              <p>{this.state.species}</p>
              <p>{this.state.homeworld}</p>
              <ul>
                {affiliations}
              </ul>
          </div>
        }
        <button type="button" className="btn" onClick={() => this.getNewCharacter()}>Random</button>
      </div>
    )
  }
}

export default StarWars2