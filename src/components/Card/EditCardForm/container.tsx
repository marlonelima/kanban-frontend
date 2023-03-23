import 'react-quill/dist/quill.snow.css';
import { useAppContext } from '@/context';
import EditCardForm from '.';
import { EditProps } from './edit.type';

function EditCardFormContainer(props: EditProps) {
  const { setModalCardId } = useAppContext();

  const onSubmit = () => console.log('submit');

  return (
    <EditCardForm
      onCancel={() => setModalCardId(null)}
      onSubmit={onSubmit}
      {...props}
    />
  );
}

export default EditCardFormContainer;
