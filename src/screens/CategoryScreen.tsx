import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Article, IArticle } from '../components/article';
import { fetchTopicDetailsAsync } from '../store/reducers/topicDetails';

interface IITem extends IArticle {
  id: string;
}

interface ICategoryScreenProps {
  route: any;
}

const CategoryScreen: React.FC<ICategoryScreenProps> = ({ route }) => {

  const topicId = route.params.topicId

  const dispatch = useDispatch();
  const { topic, loading, error } = useSelector(
    (state: any) => state.topic
  );

  useEffect(() => {
    dispatch(fetchTopicDetailsAsync(topicId));
  }, [dispatch, topicId]);

  if (!topic) {
    return <Text>Topic details not found</Text>;
  }

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
        {loading && <Text>Loading topic details...</Text>}
        {error && <Text>Error: {error}</Text>}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={topic.articles}
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