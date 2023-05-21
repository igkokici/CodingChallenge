const topics = [
    {
      id: "mobility",
      name: "Alltagsmobilität"
    },
    {
      id: "lifestyle",
      name: "Lifestyle"
    },
    {
      id: "travel",
      name: "Reisen"
    },
    {
      id: "living",
      name: "Wohnen"
    }
  ]


export const fetchTopics = async () => {
    // const response = await fetch('http://localhost:3001/topics')
    // if (!response.ok) {
    //   throw Error('Failed to fetch topics');
    // }
    // return response.json()
    return topics;
}

const topic = {
    id: "living",
    category: "Living",
    title: "Learn about living",
    description: "How does living actually affect your emissions?",
    articles: [
      {
        id: "1",
        title: "CO2 impact from heating",
        shortDescription: "Description of this item",
        readingTime: 3,
        image: require('../../assets/co2.png')
    },
      {
        id: " 2",
        title: "Energy consumption in the household",
        shortDescription: "Descriptive text about this item Descriptive text about",
        readingTime: 6,
        image: require('../../assets/energy.png')
    },
      {
        id: "3",
        title : "Possibility of reduction",
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
    ]
  }

export const fetchTopicDetails = async (topicId: string) => {
    // const response = await fetch(`http://localhost:3001/topics/${topicId}`)
    // if (!response.ok) {
    //   throw Error('Failed to fetch details about the topic');
    // }
    // return response.json()
    return topic;
}


