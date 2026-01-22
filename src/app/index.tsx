import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

interface HasName {
  FirstName: string
  LastName: string
}

interface HasAddress {
  Address: string
}

type HasNameAndAddress = (HasName & HasAddress) | HasName

const test: HasNameAndAddress = {
  FirstName: 'ismail',
  LastName: 'barka',
  Address: 'istanbul',
}

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your testtttt!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
