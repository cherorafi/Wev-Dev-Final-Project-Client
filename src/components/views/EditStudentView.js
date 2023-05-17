import { useState, Component } from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const EditStudentView = ({student}) => {
  let history = useHistory();
  const classes = useStyles();
  const [firstname, setFirstName] = useState(student.firstname);
  const [lastname, setLastName] = useState(student.lastname);
  const [email, setEmail] = useState(student.email);
  const [imageUrl, setImage] = useState(student.imageUrl);
  const [gpa, setGpa] = useState(student.gpa);
  const [campusId, setCampusId] = useState(student.campusId);

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateImage = (e) => {
    setImage(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateGpa = (e) => {
    setGpa(e.target.value);
  };

  const updateCampusId = (e) => {
    setCampusId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let params = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        gpa: gpa,
        campusId: campusId
      };
    if(imageUrl) {
        params.imageUrl = imageUrl;
      }
      axios.put(`/api/students/${student.id}`,params)
        .then((res) => history.push("/student/" + res.data.id));
  };


  return (
    <div>
    <h1>Edit Student</h1>

    <div className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            Edit the student
          </Typography>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={handleSubmit}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
          <input type="text" name="firstname" defaultValue={student.firstname} required onChange={updateFirstName} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
          <input type="text" name="lastname" defaultValue={student.lastname} required onChange={updateLastName} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
          <input type="text" name="email" defaultValue={student.email} required onChange={updateEmail} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
          <input type="text" name="gpa" defaultValue={student.gpa} required onChange={updateGpa} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus ID: </label>
          <input type="text" name="campusId" defaultValue={student.campusId} required onChange={updateCampusId} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Image URL - Optional: </label>
          <input type="text" name="imageUrl" defaultValue={student.imageUrl} onChange={updateImage} />
          <br/>
          <br/>

          <button type="submit">
              Save Changes
            </button>
            <button type="reset" onClick={() => {history.push("../students/")}}>Cancel</button>
          <br/>
          <br/>
        </form>
        </div>
    </div>
  </div>
  );
};

export default EditStudentView;

const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));