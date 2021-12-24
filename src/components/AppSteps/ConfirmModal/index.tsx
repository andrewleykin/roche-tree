import React, { useCallback, useRef, useState } from 'react'
import { ConfirmDonationRequest } from '../../../api/confirmDonation';
import { useClickOutside } from '../../../hooks/useClickOutside';
import { AppButton } from '../../AppButton';
import { AppModal, ModalProps } from '../../AppModal'
import './index.scss';

const APP_FONDS = ['Благотворительный фонд Константина Хабенского', 'Благотворительный фонд «Подари жизнь!»', 'Благотворительный фонд «СМА Семьи»', 'Благотворительный фонд «Гордей»', 'Благотворительный фонд борьбы с лейкемией', 'Благотворительный фонд «Весна»', 'Благотворительный фонд «Здравствуй!»', 'Благотворительный фонд «Редкие люди»', 'Благотворительный фонд «Альцрус»']

type Props = ModalProps & {
  confirmDonation: (data: ConfirmDonationRequest) => void
}

export const ConfirmModal: React.FC<Props> = ({isVisible, onClose, confirmDonation}) => {
  const ref = useRef(null);
  const [summ, setSumm] = useState('')
  const [fond, setFond] = useState('')
  const [isOpenSelect, setIsOpenSelect] = useState(false)

  const setFondHandler = useCallback((fond: string) => {
    setFond(fond);
    setIsOpenSelect(false)
  }, [])

  const onCloseHandler = useCallback(() => {
    setSumm('')
    setFond('')
    onClose()
  }, [onClose])

  useClickOutside(ref, () => setIsOpenSelect(false));

  const submitHandler = async () => {
    confirmDonation({
      summ,
      fond
    })

    onCloseHandler()
  }

  return (
    <AppModal isVisible={isVisible} onClose={onCloseHandler}>
      <div className="confirm">
        <h2 className="confirm__title">
          Заполните форму с&nbsp;данными
        </h2>
        <form className="confirm__form" onSubmit={submitHandler}>
          <div className="confirm__form-select" ref={ref}>
            <div className="confirm__form-select-input-wrap" onClick={() => setIsOpenSelect(!isOpenSelect)}>
              <input type="text" placeholder="Фонд пожертвования" className="confirm__form-input" disabled value={fond} />
              <div className="confirm__form-select-triangle" />
            </div>
            {isOpenSelect && (
              <ul className="confirm__form-select-list">
                {APP_FONDS.map((fond, index) => (
                  <li className="confirm__form-select-item" key={index} onClick={() => setFondHandler(fond)}>{fond}</li>
                ))}
              </ul>
            )}
          </div>
          <input type="text" placeholder="Сумма пожертвования" className="confirm__form-input" value={summ} onInput={(e) => setSumm(e.currentTarget.value)} />
          <AppButton variant="red" type="submit" disabled={fond === '' || summ === ''} className="confirm__form-btn">Подтвердить пожертвование</AppButton>
        </form>
      </div>
    </AppModal>
  )
}
