import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchForm from './src/components/SearchForm';
import UserList from './src/components/UserList';
import UserProfile from './src/components/UserProfile';
import axios from 'axios';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="UserProfile" component={UserProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomePage: React.FC<{navigation: any}> = ({navigation}) => {
  const [users, setUsers] = React.useState<{id: number; login: string}[]>([]);
  const handleUserClick = (username: string) => {
    navigation.navigate('UserProfile', {username});
  };

  const handleSearch = async (query: string) => {
    try {
      // Realiza la llamada a la API de GitHub para buscar usuarios
      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}`,
      );
      const foundUsers = response.data.items;

      // Actualiza el estado de la lista de usuarios
      setUsers(foundUsers);
    } catch (error) {
      console.error('Error searching for users:', error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <SearchForm onSearch={handleSearch} />
        <UserList users={users} onUserClick={handleUserClick} />
      </View>
    </>
  );
};

const UserProfilePage: React.FC<{route: any}> = ({route}) => {
  const {username} = route.params;

  return <UserProfile username={username} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default App;
