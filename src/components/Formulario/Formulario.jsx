import React, { useState, useEffect } from 'react';
import styles from './Formulario.module.css';

const Formulario = () => {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);

    useEffect(() => {
        if (altura > 0 && peso > 0) {
            const calculoImc = peso / ((altura / 100) * (altura / 100));
            setTimeout(() => {
                setImc(calculoImc);
            }, 1000) 
        }
    }, [altura, peso]);
    
    const getClassificacaoImc = (imc) => {
        if (imc == 0) return '';
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';
        if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
        if (imc >= 30 && imc <= 34.9) return 'Obesidade grau 1';
        if (imc >= 35 && imc <= 39.9) return 'Obesidade grau 2';
        if (imc >= 40) return 'Obesidade grau 3';
        return '';
    };

    return (    
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Calculadora IMC</h1>
            </div>
        <div>
            <form className={styles.formulario}>
                <input className={styles.itemForm} 
                placeholder='Insira a sua Altura (Cm)' 
                onChange={(evento) => setAltura(parseInt(evento.target.value))}/>

                <input className={styles.itemForm}
                placeholder='Insira o seu Peso (Kg)' 
                onChange={(evento) => setPeso(parseInt(evento.target.value))}/>
            </form>
        </div>
            <div className={styles.resultado}></div>
            <h2>IMC: {imc.toFixed(2)}</h2>
            <h2>Classificação: {getClassificacaoImc(imc)}</h2>
        </div>
    )
}

export default Formulario;
