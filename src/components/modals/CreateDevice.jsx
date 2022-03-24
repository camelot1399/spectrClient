import React, { useState } from 'react';
import { Modal } from '../UI/modal/Modal';

export const CreateDevice = ({show, onHide}) => {
    const [info, setInfo] = useState([]);
    const addInfo = () => {
        setInfo([
            ...info,
            {name: 'dadd', description: 'vsvsdv', id: Date.now()}
        ])
    };

    const removeInfo = (id) => setInfo(info.filter(el => el.id !== id))

    return (
        <Modal show={show}>
            <div className="modal__inner">
                <div className='model__title'>
                    <h1>Добавить девайс</h1>
                </div>
                <div className='model__body'>

                    <form>
                        название: 
                        <input type="text" name="name" placeholder='название устройства' required/>
                        <br />
                        <br />
                        стоимость
                        <input type="number" name="price" placeholder='стоимость' required/>
                        <br />
                        <br />
                        файл: 
                        <input type="file" />

                    </form>

                    <br />
                        <br />

                    <button
                        onClick={() => addInfo()}
                    >Добавить новое поле</button>

                        <br />
                        <br />

                        {info.map(el => {
                            return (
                                <div key={el.id}>
                                    {el.name} 
                                    {el.description}
                                    {el.id}
                                    <button onClick={(() => removeInfo(el.id))}>Удалить</button>
                                </div>
                            )
                        })
                        }


                </div>
                <div className='model__footer'>
                    <button onClick={onHide}>Закрыть</button>
                    <button >Добавить</button>
                </div>
            </div>
        </Modal>
    )
}