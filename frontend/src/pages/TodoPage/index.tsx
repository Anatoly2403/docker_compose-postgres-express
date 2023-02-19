import React, {
  ChangeEventHandler,
  FC,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { createTodo, getAllTodos, removeTodo, todoSelector } from '../../shared/store/todoSlice';
import { useAppDispatch, useAppSelector } from '../../shared/store';
import { Button } from '../../shared/ui/Button';
import { Input } from '../../shared/ui/Input';
import { Logo } from '../../shared/ui/Logo';
import { Spinner } from '../../components/Spinner';
import { TodoList } from '../../components/TodoList';
import style from './style.module.css';

export const TodoPage: FC = () => {
  const { todos, isLoading } = useAppSelector(todoSelector);
  const dispatch = useAppDispatch();
  const [todoValue, setTodoValue] = useState<string>('');

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTodoValue(event.target.value);
  };

  const addTodoHandler: MouseEventHandler<HTMLButtonElement> = () => {
    if (!todoValue.length) return;
    dispatch(createTodo(todoValue));
    setTodoValue('');
  };

  const removeTodoHandler = useCallback(
    (id: number) => {
      dispatch(removeTodo(id));
    },
    [removeTodo]
  );

  return (
    <div className={style.root}>
      {isLoading && <Spinner />}
      <div className={style.block_left}>
        <Logo greetingText="TODO Recorder" />
        <Input placeholder="Add todo" value={todoValue} onChange={handleInputChange} />
        <Button onClick={addTodoHandler}>Create</Button>
      </div>

      <div className={style.block_right}>
        {!!todos.length && <TodoList todos={todos} handleRemove={removeTodoHandler} />}
        {!todos.length && (
          <div className={style.empty}>
            <span>Empty</span>
            <span>&#129335;&#127998;</span>
          </div>
        )}
      </div>
    </div>
  );
};
