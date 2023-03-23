import { useAppContext } from '../../context';
import Header from './index';

function HeaderContainer() {
  const { setModalCardId } = useAppContext();

  return <Header title="My tasks" onClick={() => setModalCardId('0')} />;
}

export default HeaderContainer;
