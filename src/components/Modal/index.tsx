import { ReactNode, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useAppContext } from '../../context';
import { Container, Wrapper } from './styles';

type Props = {
  children: ReactNode,
};

function Modal({ children }: Props) {
  const ref = useRef(null);
  const { setModalCardId } = useAppContext();

  useOnClickOutside(ref, () => setModalCardId(null));

  return (
    <Container>
      <Wrapper ref={ref}>{children}</Wrapper>
    </Container>
  );
}

export default Modal;
