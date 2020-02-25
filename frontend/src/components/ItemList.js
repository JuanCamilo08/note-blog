import React from 'react';
import { MdDelete, MdEdit, MdCheck } from 'react-icons/md';

export default class ItemList extends React.Component {
  state = {
    editable: false,
    content: ''
  };

  onChange = event => {
    this.setState({ content: event.target.value });
  };

  render() {
    const { note, deleteNote, updateNote } = this.props;
    const { editable, content } = this.state;
    return (
      <React.Fragment>
        <li className="item-list">
          {editable ? (
            <textarea
              cols={20}
              className="input-value"
              defaultValue={note.content}
              onChange={this.onChange}
            />
          ) : (
            <p className="text-value">{note.content}</p>
          )}

          <div className="delete-btn item-tbn" onClick={event => deleteNote(event, note._id)}>
            <MdDelete className="icon" />
          </div>
          {!editable ? (
            <div className="edit-btn item-tbn" onClick={() => this.setState({ editable: true })}>
              <MdEdit className="icon" />
            </div>
          ) : (
            <div
              className="edit-btn item-tbn"
              onClick={event => {
                this.setState({ editable: false });
                updateNote(event, note._id, content);
              }}
            >
              <MdCheck className="icon" />
            </div>
          )}
        </li>
      </React.Fragment>
    );
  }
}
