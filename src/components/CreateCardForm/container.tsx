import 'react-quill/dist/quill.snow.css';
import { useAppContext } from '@/context';
import CreateCardForm from '.';

function CreateCardFormContainer() {
  const { toggleModal } = useAppContext();

  const onSubmit = () => console.log('submit');

  return (
    <CreateCardForm onCancel={toggleModal} onSubmit={onSubmit} />
  );
}

export default CreateCardFormContainer;
