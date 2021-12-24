import React from 'react'
import './index.scss';
import img from './light.svg';

export const AppFooter: React.FC = () => {
  return (
    <footer className="footer">
      <img src={img} alt="Footer Logo" className="footer__img" />
    </footer>
  )
}
