import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
// import ModalPosts from '../layout/components/ModalPosts';
import { Button,Input, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, FormText, Label} from 'reactstrap';


const PostForm = ({ addPost }, props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal); 
const [text, setText] = useState('');
  return (
    <div className="post-form">
   
      <Input  placeholder="Share your Experience!" onClick={toggle}>say saomething say something</Input>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Share your Experience</ModalHeader>
        <ModalBody>
        <FormGroup>
        <Label for="exampleEmail">Visited Place</Label>
        <Input type="textarea"   />
        <Label for="exampleFile">Image</Label>
        <Input type="file" name="file" id="exampleFile" />
        {/* <FormText color="muted">
         
        </FormText> */}
        <Label for="exampleText">Description</Label>
        <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Post</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    {/* <div className="bg-primary p">
      <h3>Say Something...</h3>
    </div>
    <form className="form my-1" onSubmit={e => {
      e.preventDefault();
      addPost ({ text });
      setText('');
    }}>
      <textarea
        name="text"
        cols="30"
        rows="5"
        placeholder="Create a post"
        value={text}
        onChange={e => setText(e.target.value)}
        required
      ></textarea>
      <input type="submit" className="btn btn-dark my-1" value="Submit" />
    </form> */}
    {/* <ModalPosts /> */}
  </div>
  )
}

PostForm.propTypes = {
addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost })(PostForm) ;
