import React from "react"
import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native"
import { shadowStyle } from "./shadow"

export interface IArticle {
    title: string;
    shortDescription: string;
    readingTime: number;
    image: ImageSourcePropType
}
  

export const Article = ({image, readingTime, shortDescription, title}: IArticle) => {

    return (
        <View style={[styles.article, shadowStyle]}>
            <Image source={image} style={styles.image} resizeMode='cover' borderRadius={16} />
            <View style={styles.articleDescriptionView}>
                <Text style={styles.articleTitle}>{title}</Text>
                <Text>{shortDescription}</Text>
                <View style={styles.timerView}>
                <Image source={require('../../assets/timer.png')} style={styles.timerImage}/>
                <Text style={styles.readingTime}>{readingTime}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    article: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#F9F4EF',        
        borderRadius: 16,
        marginBottom: 16,
        height: 144
      },
      image: {
        width: 104, 
        height: 144 
      },
      articleDescriptionView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 14
      },
      articleTitle: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 7
      },
      timerView: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'flex-end'
      },
      timerImage: {
        width: 16, 
        height: 16, 
        marginRight: 5
      },
      readingTime: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '500'
      }
})