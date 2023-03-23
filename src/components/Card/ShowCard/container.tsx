import 'react-quill/dist/quill.snow.css';
import { useAppContext } from '@/context';
import { useState } from 'react';
import ShowCard from '.';
import EditCardForm from '../EditCardForm';

function ShowCardContainer() {
  const [isEditing, setIsEditing] = useState(false);

  const title = 'How to get';
  const description = 'lorem ipsum';
  const id = '1';

  const { setModalCardId } = useAppContext();

  const onSubmit = () => console.log('submit');

  return (
    isEditing
      ? (
        <EditCardForm
          onCancel={() => setIsEditing(false)}
          onSubmit={onSubmit}
          title={title}
          description={description}
          id={id}
        />
      )
      : (
        <ShowCard
          onEdit={() => setIsEditing(true)}
          onCancel={() => setModalCardId(null)}
          onDelete={onSubmit}
          title={title}
          description={description}
        />
      )
  );
}

export default ShowCardContainer;
