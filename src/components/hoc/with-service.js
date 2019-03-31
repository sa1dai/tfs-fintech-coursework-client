import React from 'react';
import { ServiceConsumer } from '../service-context';

const withService = () => (Wrapped) => {

  return (props) => {
    return (
      <ServiceConsumer>
        {
          (boardStoreService) => {
            return (<Wrapped {...props}
                             boardStoreService={boardStoreService}/>);
          }
        }
      </ServiceConsumer>
    );
  }
};

export default withService;
