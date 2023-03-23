import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import Button from '../../Button';
import Spinner from '../../Spinner';
import { EditProps } from './edit.type';

import {
  Container, InputGroup, Label, TitleInput,
} from './styles';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => (
    <div style={{
      width: '500px',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Spinner />

    </div>
  ),
});

type Props = {
  onCancel: ()=>void;
  onSubmit: ()=>void;
} & EditProps

function EditCardForm({
  onCancel, onSubmit, title, description,
}: Props) {
  const [value, setValue] = useState(description || '');

  return (
    <Container>
      <InputGroup>
        <Label htmlFor="title-input">Title</Label>
        <TitleInput id="title-input" type="text" value={title || ''} />
      </InputGroup>
      <Label>Description</Label>
      {typeof window !== 'undefined' ? (
        <ReactQuill
          style={{
            border: '1px solid #ccc',
            borderRadius: '0.5rem',
            maxWidth: '500px',
            height: '300px',
            display: 'flex',
            flexDirection: 'column',
          }}
          theme="snow"
          value={value}
          onChange={setValue}
        />
      ) : null}

      <InputGroup />
      <InputGroup>
        <Button onClick={onSubmit} action="primary" text="Save" />
        <Button onClick={onCancel} action="secondary" text="Cancel" />
      </InputGroup>
    </Container>
  );
}

export default EditCardForm;
