import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk } from "../../store/thunks";
import Header from './Header';

import EditStudentView from "../views/EditStudentView";

class EditStudentContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchStudent(this.props.match.params.id);

  }

  componentWillUnmount() {
    this.setState({redirect: true});
}

  render() {
    return (
      <div>
        <Header />
        <EditStudentView
        student={this.props.student}
        />
      </div>
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(EditStudentContainer);