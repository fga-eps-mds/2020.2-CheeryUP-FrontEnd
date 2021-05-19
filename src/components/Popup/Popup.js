import React from 'react'
import '../../style/pages/Popup/Popup.css'

function Popup(props){

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>fechar</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup