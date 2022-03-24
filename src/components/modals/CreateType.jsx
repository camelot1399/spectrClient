import React from 'react';
import { Modal } from '../UI/modal/Modal';

export const CreateType = ({show, onHide}) => {
    return (
        <Modal show={show}>
            <div className="modal__inner">
                <div className='model__title'>
                    <h1>Добавить тип</h1>
                </div>
                <div className='model__body'></div>
                <div className='model__footer'>
                    <button onClick={onHide}>Закрыть</button>
                    <button >Добавить</button>
                </div>
            </div>
        </Modal>
    )
}