import React from 'react';
import { MdDelete, MdEdit, MdCheck } from 'react-icons/md';
import { deleteNote } from '../utils/api';

export default class ItemList extends React.Component {
  state = {
    editable: false
  };

  render() {
    const { note, deleteNote } = this.props;
    return (
      <React.Fragment>
        <li className="item-list">
          {this.state.editable ? (
            <textarea disabled cols={20} className="input-value" defaultValue={note.content} />
          ) : (
            <h5 className="text-value">{note.content}</h5>
          )}

          <div className="delete-btn item-tbn" onClick={event => deleteNote(event, note._id)}>
            <MdDelete className="icon" />
          </div>
          <div className="edit-btn item-tbn">
            <MdEdit className="icon" />
          </div>
        </li>
      </React.Fragment>
    );
  }
}
