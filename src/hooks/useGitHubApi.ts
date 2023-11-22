import {useState, useEffect} from 'react';
import axios from 'axios';
import {UserGitHub} from '../interface/user';

interface UseGitHubApiProps {
  url: string;
  options?: object;
}

const useGitHubApi = ({url, options = {}}: UseGitHubApiProps) => {
  const [data, setData] = useState<UserGitHub | null>(null);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, options);
        setData(response.data);
      } catch (error) {
        setApiError(apiError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options, apiError]);

  return {data, loading, error: apiError};
};

export default useGitHubApi;
