import axios from 'axios';

export type ConfirmDonationRequest = {
  summ: string;
  fond: string;
}

export const postConfirmDonation = async (data: ConfirmDonationRequest) => {
  // TODO: add url for post confirmDonation
  let url = '';
  try {
    await axios.post(url, data, {
      withCredentials: true
    });
  
    return true;
  } catch (e) {
    return false
  }
}