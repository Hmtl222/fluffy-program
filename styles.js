import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#606060ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    color: '#12b2beff',
    fontWeight: 'bold',
    marginBottom: 24,
    letterSpacing: 1,
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    backgroundColor: '#ffffffff',
    color: '#353535ff',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 18,
    height: 48,
    marginRight: 10,
  },
  addBtn: {
    backgroundColor: '#4caf50',
    borderRadius: 8,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#292929',
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
    width: '100%',
  },
  checkCircle: {
    marginRight: 12,
  },
  taskText: {
    flex: 1,
    color: '#fff',
    fontSize: 18,
  },
  taskDone: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteBtn: {
    color: '#f44336',
    fontSize: 22,
    marginLeft: 10,
  }
});
