import React from "react";
import style from './botao.module.scss'

class botao extends React.Component{
    render() {
        return(
            <button className={style.botao}>
                botao
            </button>
        )
    }
}

export default botao;