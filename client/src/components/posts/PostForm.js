import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import ModalPosts from '../layout/components/ModalPosts';
import { Button,Input, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, FormText, Label, InputGroup} from 'reactstrap';
const PostForm = ({ addPost, history }, props) => {
 const [ formData, setFormData] = useState({
   country: '',
   image: '',
  description: '',
 });
 const {
   country,
   image,
   description
 } = formData
const onChange = e => setFormData ({ ...formData, [e.target.name]: e.target.value})
const onSubmit = e => {
 e.preventDefault();
 addPost(formData, history);
}
 const {
   buttonLabel,
   className
 } = props;
 const [modal, setModal] = useState(false);
 const toggle = () => setModal(!modal);
 const [text, setText] = useState('');
 return (
   <div className="post-form">
     <Input  placeholder="Share your Experience!" onClick={toggle} style={{marginBottom:"150px", marginTop:"150px"}}>say saomething say something</Input>
     <Modal isOpen={modal} 
       toggle={toggle} className={className}>
       <ModalHeader toggle={toggle}>Share your Experience</ModalHeader>
       <ModalBody>
       <FormGroup>
       <Label for="exampleEmail">Visited Place</Label>
       <Input  placeholder="Visited Country" name="country" value={country} onChange={e=> onChange(e)}></Input>
       <Label for="exampleFile">Image</Label>
       <Input  placeholder="Image URL" name="image" value={image} onChange={e=> onChange(e)}></Input>
       {/* {/* <FormText color="muted"> */}
       {/* </FormText> } */}
       <Label for="exampleText">Description</Label>
       <Input type="textarea"  id="exampleText" name="description" value={description} onChange={e=> onChange(e)}></Input>
       </FormGroup>
       </ModalBody>
       <ModalFooter>
         <Button color="primary" onClick={toggle, e=>onSubmit(e)}>Post</Button>
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