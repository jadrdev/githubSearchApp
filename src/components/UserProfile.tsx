import React from 'react';
import {
  Text,
  ActivityIndicator,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';
import useGitHubApi from '../hooks/useGitHubApi';
import {View, StyleSheet} from 'react-native';

interface UserProfileProps {
  username: string;
}

const UserProfile: React.FC<UserProfileProps> = ({username}) => {
  const {
    data: user,
    loading,
    error,
  } = useGitHubApi({
    url: `https://api.github.com/users/${username}`,
  });

  if (loading) {
    return <ActivityIndicator animating={true} />;
  }

  if (error) {
    return <Text>Error fetching user data: {error}</Text>;
  }

  return (
    <View style={styles.cardStyle}>
      <Card>
        <Card.Cover source={{uri: user?.avatar_url}} />
        <Card.Content>
          <Title>{user?.login}</Title>
          <Paragraph>Name: {user?.name}</Paragraph>
          <Paragraph>Followers: {user?.followers}</Paragraph>
          <Paragraph>Following: {user?.following}</Paragraph>
          <Paragraph>Organization: {user?.company}</Paragraph>
          <Paragraph>Public gists: {user?.public_gists}</Paragraph>
          {/* Add more user details as needed */}
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: 20,
    padding: 10,
  },
});

export default UserProfile;
