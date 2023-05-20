import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { BotonCalc } from '../components/BotonCalc'
import { useCalculadora } from '../hooks/useCalculadora'

export const CalculadoraScreen = () => {

    const { 
        numero,
        numeroAnterior,

        calcular,
        eliminarUltimoNumero,
        enviarNumero,
        handleDividir,
        handleMultiplicar,
        handleRestar,
        handleSumar,
        reset,
        toggleSignoNumero,
        
     } = useCalculadora();

    return (
        <View  style={ styles.calculadoraContainer } >
            { numeroAnterior != '0' && <Text style={ styles.resultadoPequeno } >{ numeroAnterior }</Text> }
            <Text style={ styles.resultado } numberOfLines={ 1 } adjustsFontSizeToFit >{ numero }</Text>

            <View style={ styles.filaBotones }>
                {/* Boton */}
               <BotonCalc texto="C" color="#9B9B9B" textColor="black" accion={ reset } />
               <BotonCalc texto="+/-" color="#9B9B9B" textColor="black" accion={ toggleSignoNumero } />
               <BotonCalc texto="del" color="#9B9B9B" textColor="black" accion={ eliminarUltimoNumero } />
               <BotonCalc texto="/" color="#FF9427" accion={ handleDividir }/>
            </View>

            <View style={ styles.filaBotones }>
                {/* Boton */}
               <BotonCalc texto="7" accion={ enviarNumero } />
               <BotonCalc texto="8" accion={ enviarNumero } />
               <BotonCalc texto="9" accion={ enviarNumero } />
               <BotonCalc texto="X" color="#FF9427" accion={ handleMultiplicar } />
            </View>

            <View style={ styles.filaBotones }>
                {/* Boton */}
               <BotonCalc texto="4" accion={ enviarNumero } />
               <BotonCalc texto="5" accion={ enviarNumero } />
               <BotonCalc texto="6" accion={ enviarNumero } />
               <BotonCalc texto="-" color="#FF9427" accion={ handleRestar } />
            </View>

            <View style={ styles.filaBotones }>
                {/* Boton */}
               <BotonCalc texto="1" accion={ enviarNumero } />
               <BotonCalc texto="2" accion={ enviarNumero } />
               <BotonCalc texto="3" accion={ enviarNumero } />
               <BotonCalc texto="+" color="#FF9427" accion={ handleSumar } />
            </View>

            <View style={ styles.filaBotones }>
                {/* Boton */}
               <BotonCalc texto="0" accion={ enviarNumero } ancho />
               <BotonCalc texto="." accion={ enviarNumero }  />
               <BotonCalc texto="=" color="#FF9427" accion={ calcular } />
            </View>


        </View>
    )
}
