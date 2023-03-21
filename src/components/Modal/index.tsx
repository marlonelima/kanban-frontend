import { ReactNode, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useAppContext } from '@/context';
import { Container, Wrapper } from './styles';

type Props = {
  children: ReactNode,
};

function Modal({ children }: Props) {
  const ref = useRef(null);
  const { toggleModal } = useAppContext();

  useOnClickOutside(ref, toggleModal);

  return (
    <Container ref={ref}>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

export default Modal;
