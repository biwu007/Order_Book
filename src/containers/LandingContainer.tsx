import React, {useState} from 'react';
import Landing, {ILanding} from '../screens/landing/Landing';
import {TypeOrder} from '../models';
const LandingContainer = () => {
  const [selected, setSelected] = useState<TypeOrder>(TypeOrder.ALL);
  const LandingProps: ILanding = {
    selected,
    setSelected,
  };
  return <Landing {...LandingProps} />;
};

export default LandingContainer;
