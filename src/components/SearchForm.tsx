import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';

interface SearchFormProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({onSearch}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    onSearch(query);
  };

  return (
    <>
      <TextInput
        label="Enter GitHub username"
        value={query}
        onChangeText={text => setQuery(text)}
      />
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Search
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
});
export default SearchForm;
