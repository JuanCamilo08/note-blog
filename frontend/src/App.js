import React from 'react';
import { fetchNotes, postNote, deleteNote } from './utils/api';
import ItemList from './components/ItemList';

class App extends React.Component {
  state = {
    content: '',
    notes: null,
    err: null
  };

  postNote = async event => {
    event.preventDefault();

    const { content } = this.state;

    try {
      await postNote(content);

      const data = await fetchNotes();
      this.setState({ notes: data, content: '' });
    } catch (ex) {
      this.setState({ err: ex });
    }
  };

  deleteNote = async (event, id) => {
    event.preventDefault();

    const { note } = this.state;

    try {
      await deleteNote(id);

      const data = await fetchNotes();
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
          <button onClick={this.postNote} className="btn">
            agregar
          </button>
        </div>
        <div>
          <ul className="list">
            {notes &&
              notes.data.map(note => {
                return <ItemList note={note} key={note._id} deleteNote={this.deleteNote} />;
              })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
