import React, { useState } from 'react';
import { Button,Input, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, FormText, Label} from 'reactstrap';

const ModalPosts = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
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
    </div>
  );
}

export default ModalPosts;