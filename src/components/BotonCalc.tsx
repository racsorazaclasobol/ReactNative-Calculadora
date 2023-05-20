import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface IBotonCalc {
    texto: string,
    color?: string,
    textColor?: string,
    ancho?: boolean,

    accion: ( numeroAEnviar: string ) => void
}


export const BotonCalc = ( { texto, color = '#2D2D2D', textColor = 'white', ancho = false, accion }: IBotonCalc ) => {


    return (
        <TouchableOpacity onPress={ () => accion( texto ) }>
            <View style={{ ...styles.boton, backgroundColor: color, width: ( ancho ) ? 180 : 80  }}>
                <Text style={{ ...styles.textoBoton, color: textColor }} >{ texto }</Text>
            </View>
        </TouchableOpacity>
    )
}
