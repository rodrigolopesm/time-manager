import React from 'react';
import Botao from '../Botao/botao';
import style from './formulario.module.scss'

class formulario extends React.Component {
    render() {
        return(
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um nove estudo
                    </label>
                    <input 
                        type='text'
                        name='tarefa'
                        id='tarefa'
                        placeholder='o que voce quer estudar'
                        required
                    />
                </div>

                <div  className={style.inputContainer}>
                    <label htmlFor="">Tempo</label>
                    <input
                        type="time"
                        step="1"
                        name='tempo'
                        id='tempo'
                        min="00:00:00"
                        max="01:30:00"
                    />
                </div>
                <Botao />

            </form>
        )
    }
}

export default formulario;