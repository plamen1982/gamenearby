import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './firebase';


export default function App() {
  const { db }  = firebase;
  const [data, setData] = useState([]);
  useEffect(() => {
      const testCollectionRef = db.collection('test').onSnapshot(function(snapshotData) {
        const data = snapshotData.docs.map(d => {
          return { id: d.id, ...d.data() }
        });
        setData(data);
      })

  });

  return (
    <View style={styles.container}>
      {data.map(d => <Text key={d.id}>{d.name}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
