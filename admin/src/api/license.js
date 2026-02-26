import axios from 'axios';

const licenseRequests = {
  getLicense: async () => await axios.get(`/ckeditor/config`)
}

export default licenseRequests;
