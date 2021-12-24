import React from 'react'
import { AppModal, ModalProps } from '../../AppModal'
import './index.scss';
import fond1 from './fond1.png';
import fond2 from './fond2.png';
import fond3 from './fond3.png';
import fond4 from './fond4.png';
import fond5 from './fond5.png';
import fond6 from './fond6.png';
import fond7 from './fond7.png';
import fond8 from './fond8.png';
import fond9 from './fond9.png';

const DonationListItem: React.FC<{
  img: any;
  title: string;
  link: string;
}> = ({img, title, link}) => (
  <li className="donation__item">
    <div className="donation__item-img">
      <img src={img} alt={title} />
    </div>
    <span className="donation__item-title" dangerouslySetInnerHTML={{__html: title}} />
    <a href={link} className="donation__item-link" target="_blank" rel="noreferrer">Выбрать</a>
  </li>
)

export const DonationModal: React.FC<ModalProps> = ({isVisible, onClose}) => {
  return (
    <AppModal onClose={onClose} isVisible={isVisible}>
      <div className="donation">
        <h3 className="donation__title">Выберите фонд</h3>
        <ul className="donation__list">
          <DonationListItem img={fond1} title="Благотворительный фонд<br/>Константина Хабенского" link="https://bfkh.ru/help/" />
          <DonationListItem img={fond2} title="Благотворительный фонд<br/>«Подари жизнь!»" link="https://podari-zhizn.ru/ru/donate" />
          <DonationListItem img={fond3} title="Благотворительный фонд<br/>«СМА Семьи»" link="https://f-sma.ru/fund/help/" />
          <DonationListItem img={fond4} title="Благотворительный<br/>фонд «Гордей»" link="https://dmd-russia.ru/campaign/blagotvoritelnoe-pozhertvovanie-na-ustavnye-tseli-fonda/" />
          <DonationListItem img={fond5} title="Благотворительный<br/>фонд борьбы с лейкемией" link="https://leikozu.net/donate/payment/" />
          <DonationListItem img={fond6} title="Благотворительный<br/>фонд «Весна»" link="https://vesnafund.ru/donation " />
          <DonationListItem img={fond7} title="Благотворительный<br/>фонд «Здравствуй!»" link="https://www.alzrus.org/podderzhat_organizaciyu/" />
          <DonationListItem img={fond8} title="Благотворительный фонд<br/>«Редкие люди»" link="https://orphanpeople.ru/kak-pomoch/podderzhat-nas-onlajn/" />
          <DonationListItem img={fond9} title="Благотворительный<br/>фонд «Альцрус»" link="https://www.alzrus.org/podderzhat_organizaciyu/" />
        </ul>
      </div>
    </AppModal>
  )
}
