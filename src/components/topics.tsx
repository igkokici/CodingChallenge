import React from "react"
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons'

type ITopic = {
    onPress: () => void;
    id: string;
    name: string;
};
  
export const Topic: React.FC<ITopic> = ({ onPress, id, name }) => {

    const imageMappings: { [key: string]: any }  = {
        mobility: {
            background: require('../../assets/mobility.png'),
            icon: 'automobile',
            color: ['rgba(38, 93, 77, 0)', '#265D4D']
        },
        lifestyle: {
            background: require('../../assets/lifestyle.png'),
            icon: 'star-o',
            color: ['rgba(255, 200, 76, 0)', '#E9A100']
        },
        travel: {
            background: require('../../assets/travel.png'),
            icon: 'plane',
            color: ['rgba(115, 167, 192, 0)', '#73A7C0']
        },
        living: {
            background: require('../../assets/living.png'),
            icon: 'home',
            color: ['rgba(255, 113, 44, 0)', '#FF712C']
        }
    }

    return (
        <TouchableOpacity onPress={onPress} disabled={id != 'living'}>
        <View id={id} style={styles.container}>
            <ImageBackground
                source={imageMappings[id].background}
                style={styles.backgroundImage}
                resizeMode= 'cover'
                borderRadius={30}
            >
                <LinearGradient style={styles.gradient} colors={imageMappings[id].color}>
                    <FontAwesome name={imageMappings[id].icon} size={36} color="white"/>
                    <Text style={styles.name}>{name}</Text>
                </LinearGradient>
            </ImageBackground>
        </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 10,
        maxHeight: 192,
        width: 312,
        overflow: 'hidden'
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    gradient: {
        flex: 1/2,
        flexDirection: 'row',
        padding: 16,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    name: {
        fontWeight: '700',
        fontSize: 28,
        lineHeight: 40,
        color: 'white',
        marginLeft: 12
    }
})