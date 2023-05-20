import { useRef, useState } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>();
    
    const reset = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const enviarNumero = ( numeroAEnviar = '' ) => {

        // No aceptar doble punto
        if( numero.includes('.') && numeroAEnviar === '.' ) return;

        if( numero.startsWith('0') || numero.startsWith('-0') ){

            //Punto Decimal
            if( numeroAEnviar === '.' ) {

                setNumero( numero + numeroAEnviar );
                
            } else if ( numeroAEnviar === '0' && numero.includes('.') ) {// Evaluar si es otro cero y hay un punto

                setNumero( numero + numeroAEnviar );
                
            } else if( numeroAEnviar != '0' && !numero.includes('.') ){
                
                setNumero( numeroAEnviar );
                
            } else if( numeroAEnviar === '0' && !numero.includes('.') ) {
                
                setNumero( numero );

            } else {

                setNumero( numero + numeroAEnviar );

            }

        } else {

            setNumero( numero + numeroAEnviar );

        }
        

    }

    const toggleSignoNumero = () => {
        
        if( numero.includes('-') ){
            setNumero( numero.replace('-', '') );
        } else {
            setNumero( '-' + numero );
        }
        
    }

    const eliminarUltimoNumero = () => {
        
        if( numero === '0' ) return;

        if( numero.length === 1 || (numero.length === 2 && numero.includes('-')) ){
            reset();
        } else {
            setNumero( numero.slice(0, -1) );
        }
    }

    const funcionArigmetica = ( accion: string ) => {

        ( numero.endsWith('.') ) ? setNumeroAnterior( numero.replace('.','') ) : setNumeroAnterior( numero );
        reset();

    }

    const cambiarNumPorAnterior = () => {
        if( numero.endsWith('.') ) {
            setNumeroAnterior( numero.slice(0,-1) );
        } else {
            setNumeroAnterior( numero );
        }
         setNumero('0');
    }

    const handleSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }
    
    const handleRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }
    
    const handleMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }
    
    const handleDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const calcular = () => {
        if( numeroAnterior === '0' ) return;
        const num1 = Number( numero );
        const num2 = Number( numeroAnterior );

        switch ( ultimaOperacion.current ) {
            
            case Operadores.sumar:
                setNumero( `${ num1 + num2 }` );
                break;
            case Operadores.restar:
                setNumero( `${ num2 - num1 }` );
                break;
            case Operadores.multiplicar:
                setNumero( `${ num1 * num2 }` );
                break;
            case Operadores.dividir:
                setNumero( `${ num2 / num1 }` );
                break; 

            }
                
        setNumeroAnterior( '0' );
    }


    return {
        //Variables y constantes
        numeroAnterior,
        numero,

        //Funciones y Métodos
        calcular,
        reset,
        cambiarNumPorAnterior,
        eliminarUltimoNumero,
        enviarNumero,
        funcionArigmetica,
        handleDividir,
        handleMultiplicar,
        handleRestar,
        handleSumar,
        toggleSignoNumero,
    }
}
