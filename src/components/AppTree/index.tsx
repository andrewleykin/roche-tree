import React, { useState } from 'react'
import { AppFondInfo } from '../AppFondInfo';
import { FactModals } from './FactModals';
import { TreeSvg } from './TreeSvg';
import './index.scss';

export const AppTree: React.FC<{activeLamp: number;}> = ({activeLamp}) => {
  const [activeFact, setActiveFact] = useState<number>(0)
  
  return (
    <div>
      <div className="tree-svg">
        <TreeSvg setActiveFact={setActiveFact} activeLamp={activeLamp} />
        <AppFondInfo />
      </div>
      <FactModals activeFact={activeFact} onClose={() => setActiveFact(0)} />
    </div>
  )
}
