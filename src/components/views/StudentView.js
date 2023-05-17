/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student, deleteStudent } = props;

  // Render a single Student view 
  return (
    <div>
      <img width={350} height={350} src={student.imageUrl}/>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <Link to={`../campus/${student.campus.id}`}><p>Attending: {student.campus.name}</p></Link>
      <p>Email: {student.email}</p>
      <p>Gpa: {student.gpa}</p>

      <br/>
      <br/>
      <br/>
      <hr/>
      <Link to={'../students/'}>
        <button onClick={() => {deleteStudent(student.id)}}>Delete Student</button>
      </Link>
      <Link to={`../editstudent/${student.id}`}>
        <button>Edit Student</button>
      </Link>
    </div>
  );

};

export default StudentView;