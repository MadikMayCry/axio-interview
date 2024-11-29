import React from 'react';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { StyleProvider } from '@ant-design/cssinjs';
import { theme, Layout as AntdLayout } from 'antd';

import 'antd/dist/reset.css';

const { Content } = AntdLayout;

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: '/antd.min.css',
    },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

export default function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <StyleProvider hashPriority="high">
      <AntdLayout>
        <Content style={{ padding: '48px', minHeight: '100vh' }}>
          <div
            style={{
              background: colorBgContainer,
              minHeight: '100%',
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </AntdLayout>
    </StyleProvider>
  );
}
