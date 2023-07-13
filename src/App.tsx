import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Layout } from './shared/Layout';
import { Header } from './shared/components/Header';
import { Content } from './shared/components/Content';
import { CardsList } from './shared/components/CardsList';
import { useToken } from './hooks/useToken';
import './main.global.css';

function AppComponent() {
  const [token] = useToken();

  return (
    <Layout>
      <Header token={token} />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
