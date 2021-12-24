import axios from 'axios';

export const fetchActiveLamp = async () => {
  // TODO: add url for fetch fetchActiveLamp
  let url = '';

  // FIXME: for test
  if (!url) {
    return 100
  }

  try {
    let response = await axios.get(url, {
      withCredentials: true
    });
  
    return response.data;
  } catch (e: any) {
    return new Error(e)
  }
}
