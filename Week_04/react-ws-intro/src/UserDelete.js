import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import './App.css';

class UserDelete extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = { user: {}, httpStatusCode: 0, httpStatusOk: false };

  url = `https://reqres.in/api/users/${this.props.id}`;

  componentDidMount() {

    // Get the requested object
    fetch(this.url)
      .then(response => {
        // Optional...
        this.setState({ httpStatusCode: response.status, httpStatusOk: response.ok });
        if (response.ok) {
          // Parse the response body as JSON
          return response.json();
        } else if (response.status === 404) {
          // Not found 
          throw Error('HTTP 404, Not found');
        } else {
          // Some other situation
          throw Error(`HTTP ${response.status}, ${response.statusText}`);
        }
      })
      .then(responseData => {
        // "responseData" is an object; here, we're interested in its "data" property
        // Study the shape of the data in the reqres.in service
        this.setState({ user: responseData.data });
        // Optional...
        //console.log(responseData.data);
      })
      .catch(error => {
        // Handles an error thrown above, as well as network general errors
        console.log(error)
      });
  }

  handleSubmit(e) {

    // Delete
    fetch(this.url, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          // Parse the response body as JSON
          return response.status;
        } else if (response.status >= 400 && response.status < 500) {
          // Error caused by the requestor
          throw Error(`HTTP ${response.status}, ${response.statusText}`);
        } else {
          // Some other situation
          throw Error(`HTTP ${response.status}, ${response.statusText}`);
        }
      })
      .then(responseData => {
        // "responseData" is an integer (probably 204)
        // Study the shape of the data in the reqres.in service
        // Optional...
        console.log(responseData);
        // Redirect
        this.props.history.push('/users');
      })
      .catch(error => {
        // Handles an error thrown above, as well as network general errors
        console.log(error)
      });
  }

  render() {
    document.title = `Delete user ${this.props.id}`;

    // For coding convenience, create a shortcut object
    const u = this.state.user;

    return (
      <div>
        <h4>Delete user {u.first_name} {u.last_name} from the reqres.in service</h4>

        {this.state.httpStatusOk ? (
          <div className="row">
            <div className="col-md-6">
              <dl className="dl-horizontal">
                <dt>Identifier</dt><dd>{u.id}</dd>
                <dt>First name</dt><dd>{u.first_name}</dd>
                <dt>Last name</dt><dd>{u.last_name}</dd>
              </dl>
            </div>
            <div className="col-md-2">
              <img src={u.avatar} alt="" className="img-responsive" />
            </div>
          </div>

        ) : (
            <p>Requested user was not found</p>
          )}

        <hr />
        <p>Confirm that this user should be deleted, or cancel to return to the list of users</p>
        <p><button onClick={this.handleSubmit} className="btn btn-danger">Confirm delete</button>&nbsp;&nbsp;
        <Link className='btn btn-default' to='/users'>Cancel</Link></p>
      </div>
    );
  }
}

export default withRouter(UserDelete);
