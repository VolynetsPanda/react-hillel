import React from "react";
import './style.css';

class CustomModal extends React.Component{
    render() {
        const {children, modal, change} = this.props;
        return modal && (
            <div className='wrap-modal'>
                <div className="modal">
                    {children}
                    <a href="#" className="close" onClick={change}>Close</a>
                </div>
            </div>
        )
    }
}

export default CustomModal;
