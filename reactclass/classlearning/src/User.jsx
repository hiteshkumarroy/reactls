import PropTypes from 'prop-types';
import React from 'react';
import './navigation.css';
export default class User extends React.Component {
  render() {
    return (
      <div >
        <h1>Validation Example</h1>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Value</th>
              <th>Valid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Array</td>
              <td>{JSON.stringify(this.props.propArray)}</td> 
              <td>{this.props.propArray ? "true" : "false"}</td>
            </tr>
            <tr>
              <td>Boolean</td>
              <td>{this.props.propBool ? "true" : "false"}</td>
              <td>{this.props.propBool ? "true" : "false"}</td>
            </tr>
            <tr>
              <td>Function</td>
              <td>{this.props.propFunc ? this.props.propFunc(5) : 'No function provided'}</td>
              <td>{this.props.propFunc ? "true" : "false"}</td>
            </tr>
            <tr>
              <td>String</td>
              <td>{this.props.propString}</td>
              <td>{this.props.propString ? "true" : "false"}</td>
            </tr>
            <tr>
              <td>Number</td>
              <td>{this.props.propNumber}</td>
              <td>{this.props.propNumber ? "true" : "false"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

User.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
};

User.defaultProps = {
  propArray: [1, 2, 3, 4, 5],
  propBool: true,
  propFunc: function (x) { return x + 5; }, // Uncomment and fix this function
  propNumber: 1,
  propString: "Lpu",
};
 