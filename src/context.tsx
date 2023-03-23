import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from 'react';
import { ColumnsListType } from './components/Column/column.type';

type Props = {
  children: ReactNode;
}

type ContextType = {
  board: ColumnsListType,
  setBoard: Dispatch<SetStateAction<ColumnsListType>>,
  modalOpenedId: string | null,
  setModalCardId: Dispatch<SetStateAction<string | null>>;
}

const ColumnsList: ColumnsListType = {
  to_do: {
    title: 'To Do',
    slug: 'to_do',
    color: '#D4AC53',
    items: [
      { id: '1', title: 'How To Get Away With Murder' },
    ],
  },
  doing: {
    title: 'Doing',
    slug: 'doing',
    color: '#d453c3',
    items: [
      { id: '2', title: 'The Big Bang Theory' },
    ],
  },
  done: {
    title: 'Done',
    slug: 'done',
    color: '#7ad453',
    items: [
      { id: '3', title: 'Sherlock' },
    ],
  },
};

const Context = createContext({} as ContextType);

function AppContext({ children }: Props) {
  const [board, setBoard] = useState<ColumnsListType>(ColumnsList);
  const [modalOpenedId, setModalCardId] = useState<string | null>(null);

  return (
    <Context.Provider value={{
      board, setBoard, modalOpenedId, setModalCardId,
    }}
    >
      {children}
    </Context.Provider>
  );
}

export default AppContext;

export const useAppContext = () => useContext(Context);
