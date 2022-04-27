import React from 'react'
import './table.modal.css'

export const Modal = ({ show }) => {

    if (!show) {
        return null
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title">This is Modal Title</h1>
                </div>
                <div className="modal-bosy">
                    This is Content
                </div>
                <div className="modal-footer">
                    <button>Close Modal</button>
                </div>
            </div>
        </div>
    )
}

