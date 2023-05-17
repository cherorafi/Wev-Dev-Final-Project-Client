/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus, deleteCampus} = props;
  
  // Render a single Campus view with list of its students
  return (
    <div>
      <img width={500} height={350} src={campus.imageUrl}/>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <h2>Student Enrollments:</h2>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>             
          </div>
        );
      })}
      {!campus.students.length && (
          <div>
            <p>There are no students currently enrolled.</p>
          </div>
        )
      }
      
      <br/>
      <hr/>
      <Link to={'../campuses/'}>
        <button onClick={() => {deleteCampus(campus.id)}}>Delete Campus</button>
      </Link>
      <Link to={`../editcampus/${campus.id}`}>
        <button>Edit Campus</button>
      </Link>
    </div>
  );
};

export default CampusView;