import React from 'react';
import VerticalLayout from '.';

export default {
  title: 'lib/components/VerticalLayout'
};

const Header: React.SFC<{}> = () => (
  <div style={{ background: 'orange', height: '64px' }}/>
);

const Footer: React.SFC<{}> = () => (
  <div style={{ background: 'purple', height: '32px' }}/>
);

export const contentOnly: React.SFC<{}> = () => (
  <VerticalLayout>
    <h1>This is the content</h1>
  </VerticalLayout>
);

export const headerAndContent: React.SFC<{}> = () => (
  <VerticalLayout header={<Header/>}>
    <h1>This is the content</h1>
  </VerticalLayout>
);

export const footerAndContent: React.SFC<{}> = () => (
  <VerticalLayout footer={<Footer/>}>
    <h1>This is the content</h1>
  </VerticalLayout>
);

export const complete: React.SFC<{}> = () => (
  <VerticalLayout footer={<Footer/>} header={<Header/>}>
    <h1>This is the content</h1>
  </VerticalLayout>
);
