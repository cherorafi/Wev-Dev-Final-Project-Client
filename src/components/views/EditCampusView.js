import { useState } from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const EditCampusView = ({campus}) => {
  let history = useHistory();
  const classes = useStyles();
  const [name, setName] = useState(campus.name);
  const [address, setAddress] = useState(campus.address);
  const [imageUrl, setImage] = useState(campus.imageUrl);
  const [description, setDescription] = useState(campus.description);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateAddress = (e) => {
    setAddress(e.target.value);
  };

  const updateImage = (e) => {
    setImage(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let params = {
        name: name,
        address: address,
        description: description
      };
    if(imageUrl) {
        params.imageUrl = imageUrl;
      }
      axios.put(`/api/campuses/${campus.id}`,params)
        .then((res) => history.push("/campus/" + res.data.id));
  };


  return (
    <div>
    <h1>Edit Campus</h1>

    <div className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            Add a Campus
          </Typography>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={handleSubmit}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Name: </label>
          <input type="text" name="name" defaultValue={campus.name} required onChange={updateName} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Address: </label>
          <input type="text" name="address" defaultValue={campus.address} required onChange={updateAddress} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
          <input type="text" name="description" defaultValue={campus.description} required onChange={updateDescription} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Image URL - Optional: </label>
          <input type="text" name="imageUrl" defaultValue={campus.imageUrl} onChange={updateImage} />
          <br/>
          <br/>

          <button type="submit">
              Save Changes
            </button>
            <Link to={`../campuses`}>
              <button>Cancel</button>
            </Link>
          <br/>
          <br/>
        </form>
        </div>
    </div>
  </div>
  );
};

export default EditCampusView;

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