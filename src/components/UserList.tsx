import React from 'react';
import {List} from 'react-native-paper';

interface UserListProps {
  users: {id: number; login: string}[];
  onUserClick: (login: string) => void;
}

const UserList: React.FC<UserListProps> = ({users, onUserClick}) => {
  return (
    <List.Section>
      <List.Subheader>Users</List.Subheader>
      {users.map(user => (
        <List.Item
          key={user.id}
          title={user.login}
          onPress={() => onUserClick(user.login)}
        />
      ))}
    </List.Section>
  );
};

export default UserList;
