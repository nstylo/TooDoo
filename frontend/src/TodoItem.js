import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = props => {
  let color;
  if (props.done) {
    color = 'checked';
  } else {
    color = props.color;
  }

  let style;
  let crossedOut = null;
  switch (color) {
    case 'default':
      style = { color: '#36454f', backgroundColor: '#f8f8fa' };
      break;
    case 'red':
      style = { color: '#36454f', backgroundColor: 'hsl(355,100%,77%)', borderColor: 'hsl(355,100%,67%)' };
      break;
    case 'crimson':
      style = { color: '#36454f', backgroundColor: 'hsl(3,100%,82%)', borderColor: 'hsl(3,100%,72%)' };
      break;
    case 'orange':
      style = { color: '#36454f', backgroundColor: 'hsl(24,100%,86%)', borderColor: 'hsl(24,100%,76%)' };
      break;
    case 'green':
      style = { color: '#36454f', backgroundColor: 'hsl(83,55%,84%)', borderColor: 'hsl(83,55%,74%)' };
      break;
    case 'blue':
      style = { color: '#36454f', backgroundColor: 'hsl(158,55%,78%)', borderColor: 'hsl(158,55%,68%)' };
      break;
    case 'checked':
      style = { color: '#c0c2ce', backgroundColor: '#e5e6eb' };
      crossedOut = { textDecoration: 'line-through' };
      break;
    default:
      style = { color: '#36454f', backgroundColor: '#f8f8fa' };
      break;
  }

  return (
    <li style={style} className="todoitem">
      <button className="delete" onClick={props.delete}>
        x
      </button>
      <div>
        <input type="checkbox" className="checkitem" onClick={props.check} defaultChecked={props.done ? 'done' : ''} />
        <label className="itemlabel" style={crossedOut}>
          {props.entry}
        </label>
      </div>
      <br />
      <hr style={style} />
      <footer className="itemfooter">{props.dateTime}</footer>
    </li>
  );
};

/**
 * prop type validation
 */
TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  entry: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  dateTime: PropTypes.string.isRequired,
  delete: PropTypes.func.isRequired,
  check: PropTypes.func.isRequired
};

export default TodoItem;