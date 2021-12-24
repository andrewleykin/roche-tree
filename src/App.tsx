import React, { useCallback, useEffect, useState } from 'react';
import { ConfirmDonationRequest, postConfirmDonation } from './api/confirmDonation';
import { fetchActiveLamp } from './api/fetchActiveLamp';
import { AppFooter } from './components/AppFooter';
import { AppHeader } from './components/AppHeader';
import { AppSteps } from './components/AppSteps';
import { AppTree } from './components/AppTree';
import stars from './stars.svg';

const App: React.FC = () => {
  const [activeLamp, setActiveLamp] = useState<number>(0)

  const confirmDonationHandler = async (data: ConfirmDonationRequest) => {
    await postConfirmDonation(data)
    setActiveLamp(activeLamp + 1)

    document.querySelector('#bulbs')?.children[125 - activeLamp - 1].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchActiveLamp()
      setActiveLamp(response);
    };

    fetchData();
  }, [])
  
  return (
    <div className="App" style={{backgroundColor: '#080F48'}}>
      <AppHeader />
      <main className="App__main">
        <div className="App__stars">
          <img src={stars} alt="Stars Background" />
        </div>
        <AppSteps confirmDonation={confirmDonationHandler}  />
        <AppTree activeLamp={activeLamp} />
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
