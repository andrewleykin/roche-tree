import React, { useRef } from 'react'
import './index.scss';
import closeImg from './close.svg';
import ReactTooltip from 'react-tooltip';

export const AppFondInfo: React.FC = () => {
  const ref = useRef(null);

  return (
    <ReactTooltip id="fondInfo" ref={ref} arrowColor="transparent" effect="solid" clickable className="tooltip" getContent={(dataTip) => (
      <div className="fond-info__block ">
        <button className="fond-info__close" onClick={() => {
          // @ts-ignore
          ref.current.tooltipRef = null
          ReactTooltip.hide()
        }}><img src={closeImg} alt="close button" /></button>
        <span className="fond-info__block-text" dangerouslySetInnerHTML={{__html: dataTip}} />
      </div>
    )} />
  )

  // return (
  //   <div className={`fond-info ${isLeft ? 'fond-info--left' : ''}`}>
  //     <span ref={ref} onClick={() => setIsOpen(true)} className="fond-info__wrap">
  //       {children}
  //       {isOpen && (
  //         <div className="fond-info__block">
  //           <button className="fond-info__close" onClick={(e) => {
  //             e.stopPropagation()
  //             setIsOpen(false)
  //           }}>
  //             <img src={closeImg} alt="close button" />
  //           </button>
  //           <p className="fond-info__block-text" dangerouslySetInnerHTML={{__html: text}} />
  //         </div>
  //       )}
  //     </span>
  //   </div>
  // )
}
