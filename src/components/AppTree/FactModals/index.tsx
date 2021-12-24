import React from 'react'
import './index.scss';
import { AppModal } from '../../AppModal'
import bgImg from './bg.svg';

const FactModalContent: React.FC<{index: number, text: string}> = ({index, text}) => (
  <div className="fact">
    <div className="fact__img">
      <img src={bgImg} alt="Fact background" />
    </div>
    <h2 className='fact__title'>Факт №{index}</h2>
    <p className="fact__text" dangerouslySetInnerHTML={{__html: text}} />
  </div>
)

const APP_FACTS = ['В 2020 году на Московском Марафоне вместе с фондом «Семьи СМА» организовали   благотворительный забег #бежимзадвоих в поддержку детей и&nbsp;взрослых со спинальной мышечной атрофией (СМА)', ' 28 868 306 человек во всем мире получили лечение нашими лекарствами в 2020 году', '32 нащих препарата включены в Примерный перечень основных лекарственных средств ВОЗ', 'Уже более 50 лет мы находимся в авангарде исследований и лечения онкологических заболеваний', 'Инновация — это наша жизненная сила. Мы ежегодно инвестируем около 11 млрд швейцарских франков в исследования и разработки', 'Наши препараты для лечения онкологических и онкогематологических заболеваний помогли россиянас сохранить 250 000 лет жизни', '2/3 лекарственных препаратов в нашем портфеле созданы с помощью биотехнологий', '30 наших препаратов включены в перечень жизненно необходимых важнейших лекарств в России' , 'В 2021 году мы организовали «Марш в помощь детям» и собрал 1 млн рублей для подопечных благотворительного фонда «Жизнь».', 'Мы новаторы в сфере здравоохранения — 17 из 20 наших препаратов , одобренных за последние 20 лет, стали первыми в своём классе']

type Props = {
  activeFact: number;
  onClose: () => void
}

export const FactModals: React.FC<Props> = ({activeFact, onClose}) => {
  return (
    <>
      {APP_FACTS.map((fact, index) => (
        <AppModal isVisible={activeFact === index + 1} onClose={onClose} key={index}>
          <FactModalContent index={index + 1} text={fact} />
        </AppModal>
      ))}
    </>
  )
}