import React from 'react';

import GuestList from './GuestList.js';
import BirthdayInfo from './BirthdayInfo.js';

const BirthdayContentPage = ({
  guestList
}) => {
  return (
    <div>
      <h1>Birthday Party</h1>
      <BirthdayInfo/>
      <GuestList
        guestList={guestList}
      />
    </div>
  );
};

const App = () => {
  const guestList = [{
    name: 'First Person',
    brings: 'Champanhe'
  }, {
    name: 'Second Person',
    brings: 'Cake'
  }, {
    name: 'Third Person',
    brings: 'Beer'
  }];

  return (
    <BirthdayContentPage
      guestList={guestList}
    />
  );
};

export default App;
