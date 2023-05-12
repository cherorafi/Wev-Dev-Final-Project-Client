import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk } from "../../store/thunks";
import Header from './Header';

import EditCampusView from "../views/EditCampusView";

class EditCampusContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);

  }

  componentWillUnmount() {
    this.setState({redirect: true});
}

  render() {
    return (
      <div>
        <Header />
        <EditCampusView
        campus={this.props.campus}
        />
      </div>
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(EditCampusContainer);