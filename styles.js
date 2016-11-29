import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: '#669999'
  },
  container: {
    alignItems: 'center'
  },
  scrollView: {
    height: 120,
    backgroundColor: '#669980',
    marginBottom: 10
  },
  buttons: {
    marginVertical: 10
  },
  button: {
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: '#0D4D4D',
    color: 'white',
    textAlign: 'center'
  },
  selectedButton: {
    backgroundColor: '#006699'
  },
  body: {
    alignItems: 'center'
  },
  subTitle: {
    marginVertical: 10
  },
  viewport: {
    alignSelf: 'center',
    backgroundColor: 'white'
  }
})

export default styles
