import React from 'react';
import { Result, Button } from 'antd';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';

const Page404 = () => {
  const history = useHistory();
  setTimeout(() => {
    history.push('/');
  }, 3000);
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <a href='/'>
          <Button type='primary'>Back Home</Button>
        </a>
      }
    />
  );
};

export default Page404;
