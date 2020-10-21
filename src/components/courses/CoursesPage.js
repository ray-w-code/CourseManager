import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch((error) => {
      alert("Loading courses failed" + error);
    });
  }

  // handleChange = (event) => {
  //   const course = { ...this.state.course, title: event.target.value };
  //   this.setState({ course });
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   this.props.actions.createCourse(this.state.course);
  //   alert(this.state.course.title);
  // };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>CoursesPage</h2>
        <h3>Add Course</h3>

        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}
function mapDistpatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDistpatchToProps)(CoursesPage);
