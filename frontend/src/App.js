import React from 'react';
import axios from './utils/axios';
import { fetchNotes, postNote } from './utils/api';

class App extends React.Component {
  state = {
    content: '',
    notes: null,
    err: null
  };

  onClick = async event => {
    event.preventDefault();

    const { content } = this.state;

    try {
      const post = await postNote(content);

      const data = await fetchNotes();

      console.log('la del onClick ', data);

      this.setState({ notes: data, content: '' });
    } catch (ex) {
      this.setState({ err: ex });
    }
  };

  onChange = event => {
    this.setState({ content: event.target.value });
  };

  async componentDidMount() {
    try {
      const notes = await fetchNotes();

      this.setState({
        notes
      });
    } catch (ex) {
      this.setState({
        err: ex.message
      });
    }
  }

  render() {
    const { notes, err, content } = this.state;
    console.log('err ', err);
    console.log('data', notes);
    console.log('on change', content);
    return (
      <React.Fragment>
        <div className="search">
          <input value={content} onChange={this.onChange} className="input" />
          <button onClick={this.onClick} className="btn">
            agregar
          </button>
        </div>
        <div>
          <ul>
            {notes &&
              notes.data.map(note => {
                return <li key={note._id}>{note.content} </li>;
              })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
