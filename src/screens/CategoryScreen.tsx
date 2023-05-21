import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Article, IArticle } from '../components/article';

interface IITem extends IArticle {
  id: string;
}

interface ICategoryScreenProps {
  navigation: any;
}

const CategoryScreen: React.FC<ICategoryScreenProps> = ({ navigation }) => {

  const articles: IITem[] = [
    {
      id: "1",
      title: "CO2 impact from heating",
      shortDescription: "Description of this item",
      readingTime: 3,
      image: require('../../assets/co2.png')
    },
    {
      id: "2",
      title: "Energy consumption in the household",
      shortDescription: "Descriptive text about this item Descriptive text about",
      readingTime: 6,
      image: require('../../assets/energy.png')
    },
    {
      id: "3",
      title: "Possibility of reduction",
      shortDescription: "Description text about this item",
      readingTime: 4,
      image: require('../../assets/reduction.png')
    },
    {
      id: "4",
      title: "Possibility of funding",
      shortDescription: "Description text about this item Description text about",
      readingTime: 8,
      image: require('../../assets/wood.png')
    }
  ];

  const renderItem = ({ item }: { item: IITem }) => (
    <Article 
      image={item.image} 
      readingTime={item.readingTime} 
      shortDescription={item.shortDescription} 
      title={item.title}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <Text style={styles.title}>Lerne über Wärmeerzeugung</Text>
        <Text style={styles.description}>Wie wirkt sich eigentlich Heizen in den eigenen vier Wänden auf deine Emissionen aus?</Text>
      </View>
      <View style={styles.articleView}>
        <Text style={styles.titleArticle}>Übersicht</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={articles}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'white'
  },
  contentView: {
    flexDirection: 'column',
    marginTop: 68,
    marginBottom: 33
  },
  title: {
    fontSize: 22,
    lineHeight: 32,
    marginBottom: 6,
    fontWeight: '700',
    color: '#242424'
  },
  description: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#12173D'
  },
  articleView: {
    flex: 1,
    flexDirection: 'column'
  },
  titleArticle: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    color: '#242424',
    marginBottom: 26
  },
});

export default CategoryScreen