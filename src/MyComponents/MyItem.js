import React from 'react';


class Item extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clicks: 0,
      remaining: 100
    }
  }

  clicked() {
    console.log("Clicked:", this.props.name);

    this.setState({
      clicks: this.state.clicks + 1,
      remaining: this.state.remaining - 1
    })
  }

  render() {
    return (
      /* div style scale to half size using jsx */
      <div>
        <h1 onClick={() => { this.clicked() }}>
          Hello, {this.props.name}!
        </h1>
        <span>
          Clicks: {this.state.clicks}
        </span>
        <br />
        <span>
          Remaining: {this.state.remaining}
        </span>
      </div>
    )
  }
}

export default Item;