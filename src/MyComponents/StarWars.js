import React from "react";

class FilmItemRow extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.url}>{ this.props.url }</a>
      </li>
    )
  }
}

class StarWars extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: [],
    }
  }

  getNewCharacter() {
    const randNum = Math.ceil(Math.random() * 82);
    const url = `https://swapi.dev/api/people/${randNum}/`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loadedCharacter: true,
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
        })
      })
    
  }

  render() {
    const movies = this.state.films.map((url, i) => {
      return <FilmItemRow key={i} url={url} />
    })

    return (
      <div>
        {/* JSX IF statement */}
        {
          this.state.loadedCharacter && (
          <div>
            <h1>{this.state.name}</h1>
            <p>Height: {this.state.height}cm</p>
            <p><a href={this.state.homeworld}>Homeworld</a></p>
            <ul>
              {movies}
            </ul>
          </div>
          )
        }

        <button
          onClick={() => this.getNewCharacter()}
          type="button"
          className="btn"
        >
          Random
        </button>
      </div>
    );
  }
}

export default StarWars;