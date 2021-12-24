import React, { useState } from 'react'
import { ConfirmDonationRequest } from '../../api/confirmDonation';
import { AppButton } from '../AppButton';
import { ConfirmModal } from './ConfirmModal';
import { DonationModal } from './DonationModal';
import './index.scss';
import {ReactComponent as Steps} from './steps.svg';

const StepsItem: React.FC<{step: string, text: string}> = ({step, text}) => (
  <li className="steps__item">
    <svg className="steps__icon">
      <use xlinkHref={`#step${step}`}></use>
    </svg>
    <span className="steps__step">Шаг {step}</span>
    <p className="steps__text" dangerouslySetInnerHTML={{__html: text}}></p>
  </li>
)

type Props = {
  confirmDonation: (data: ConfirmDonationRequest) => void
}

export const AppSteps: React.FC<Props> = ({confirmDonation}) => {
  const [modal, setModal] = useState<'donation' | 'confirm' | ''>('')
  const closeModal = () => setModal('')

  return (
    <section className="steps">
      <Steps />
      <ul className="steps__list">
        <StepsItem step="1" text="Нажмите кнопку «Сделать пожертвование» и выберите<br/>один из восьми фондов" />
        <StepsItem step="2" text="Пожертвуйте сумму от 200<br/>рублей на сайте фонда" />
        <StepsItem step="3" text="Вернитесь на эту страницу,<br/>нажмите на кнопку «Я пожертвовал» и&nbsp;заполните форму c данными" />
        <StepsItem step="4" text="Подтвердите пожертвование и&nbsp;смотрите, как загорается ваш личный фонарик на ёлке" />
        <StepsItem step="5" text="Прочитайте интересные<br/>факты о Рош на ёлке" />
        <StepsItem step="6" text="Иногда проверяйте ёлку — благодаря  пожертвованиям на ней каждый день будут загораться огни" />
      </ul>
      <div className="steps__actions">
        <AppButton variant="yellow" onClick={() => setModal('donation')}>Сделать пожертвование</AppButton>
        <AppButton variant="violet" style={{minWidth: '480px'}}  onClick={() => setModal('confirm')}>Я пожертвовал(а)</AppButton>
      </div>
      <DonationModal isVisible={modal === 'donation'} onClose={closeModal} />
      <ConfirmModal isVisible={modal === 'confirm'} onClose={closeModal} confirmDonation={confirmDonation} />
    </section>
  )
}
