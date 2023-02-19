import React, { FC } from 'react';
import { Layout } from './Layout';
import { TodoPage } from './pages/TodoPage';

export const App: FC = () => {
  return (
    <Layout>
      <TodoPage />
    </Layout>
  );
};
