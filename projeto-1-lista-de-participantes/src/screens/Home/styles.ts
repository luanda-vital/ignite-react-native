import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
    paddingBottom: 0
  },
  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16
  },
  form:{
    width: '100%',
    flexDirection: 'row',
    marginVertical: 40
  },
  input: {
    backgroundColor: '#1f1e25',
    height: 56,
    flex: 1,
    borderRadius: 8,
    color: '#fdfcfe',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  button: {
    backgroundColor: '#43bd4d',
    height: 56,
    width: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fdfcfe',
    fontSize: 24
  },
  listEmptyText: {
    color: '#fdfcfe',
    fontSize: 14,
    textAlign: 'center'
  }
})