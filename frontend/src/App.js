import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    notes: null
  };

  getData = async () => {
    const notes = await axios.get('https://localhost:3000/api/note', {
      headers: { 'Content-Type': 'application/json' }
    });
    this.setState({ notes });
    console.log('here', notes.data);
  };
  async componentDidMount() {
    await this.getData();
  }

  render() {
    return (
      <React.Fragment>
        <div className="search">
          <input className="input" />
          <button className="btn">agregar</button>
        </div>
        <div>{}</div>
      </React.Fragment>
    );
  }
}

export default App;
