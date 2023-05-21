import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Topic } from '../components/topics';

interface IResponseTopics {
  id: string,
  name: string
}

const OverviewScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

  // const [data, setData] = useState(Array<IResponseTopics>);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://127.0.0.1:3001/topics')
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const data : Array<IResponseTopics> = [{"id":"mobility","name":"Alltagsmobilität"},{"id":"lifestyle","name":"Lifestyle"},{"id":"travel","name":"Reisen"},{"id":"living","name":"Wohnen"}]


  return (
    <View style={styles.container}>
      <View style={styles.testContainer}>
        <Text style={styles.title}>Verstehen</Text>
        <Text style={styles.description}>Wir helfen dir, den Klimawandel zu verstehen, damit du deinen Einfluss bewusst verringern kannst.</Text>
      </View>

      <View style={styles.secondTestContainer}>
        {/* <View style={styles.transform}/> */}
          <Text style={styles.topicsTitle}>
            Deine wichtigsten Themen
          </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categoryList}>
            {data.map(topic => (
              <Topic key={topic.id} id={topic.id} name={topic.name} onPress={() => navigation.navigate(topic.id === 'living' ? 'Wohnen' : topic.id)}/>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F4EF',
  },
  testContainer: {
    flex: 1/3,
    backgroundColor: 'white',
    borderBottomLeftRadius: 40,
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  transform: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',    
    transform: [
      {
        rotate: '-180deg'
      },
    ],
    width: 40,
    height: 40,
    zIndex: 1
  },
  secondTestContainer: {
    flex: 2/3,
    borderTopRightRadius: 40,
    paddingHorizontal: 24,
    flexDirection: 'column'
  },
  categoryList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 42,
    lineHeight: 56,
    marginBottom: 35,
    color: '#12173D',
    fontWeight: '700'
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: '#12173D'
  },
  topicsTitle: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 40,
    color: '#242424',
    marginTop: 50,
    marginBottom: 38
  }
});

export default OverviewScreen