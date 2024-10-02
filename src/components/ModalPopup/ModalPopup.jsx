import React from 'react'
import './ModalPopup.css'

const ModalPopup = ({btnText, modalMsg,setModalShow, iconClass} ) => {
    return (
        <div className="modalContainer ">
            <div className='ModalPopup '>
                {modalMsg}
                <i className={iconClass}></i>
                <button onClick={()=>setModalShow(false)}>{btnText}</button>
            </div>
        </div>
    )
}

export default ModalPopup