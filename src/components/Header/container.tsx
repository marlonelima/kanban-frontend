import { useAppContext } from '@/context';
import Header from './index';

function HeaderContainer() {
  const { toggleModal } = useAppContext();

  return <Header title="My tasks" onClick={toggleModal} />;
}

export default HeaderContainer;
