import {API_URL, Account} from '../constants/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNC_STORAGE} from '../constants';
const ApiAccountUntil = {
  login: async account => {
    const endpoint = `${API_URL}${Account}login`;
    const result = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(account),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(e => {
        return e.text();
      })
      .then(text => {
        return JSON.parse(text);
      })
      .catch(function (error) {});
    return result;
  },
  signin: async account => {
    const endpoint = `${API_URL}${Account}insertAccount`;

    const result = await fetch(endpoint, {
      method: 'POST',
      body: account,
      headers: {
        'content-type': 'multipart/form-data',
        Accept: 'application/json',
      },
    })
      .then(e => {
        return e.text();
      })
      .then(text => {
        return JSON.parse(text);
      })
      .catch(function (error) {});
    return result;
  },
  get_infor_byid: async id_user => {
    const endpoint = `${API_URL}${Account}get_infomation_byid`;
    const result = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({id_user}),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(e => {
        return e.text();
      })
      .then(text => {
        return JSON.parse(text);
      })
      .catch(function (error) {});
    return result;
  },
  create_follow: async id_follower => {
    const endpoint = `${API_URL}${Account}create_follow`;
    const account = JSON.parse(await AsyncStorage.getItem('account'));
    const result = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({id_follower}),
      headers: {
        Authorization: ` Bearer ${account.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(e => {
        return e.text();
      })
      .then(text => {
        return JSON.parse(text);
      })
      .catch(function (error) {});

    return result;
  },
  delete_follow: async id_follower => {
    const endpoint = `${API_URL}${Account}delete_follow`;
    const account = JSON.parse(await AsyncStorage.getItem('account'));
    const result = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({id_follower}),
      headers: {
        Authorization: ` Bearer ${account.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(e => {
        return e.text();
      })
      .then(text => {
        return JSON.parse(text);
      })
      .catch(function (error) {});

    return result;
  },
  getfollower: async () => {
    const endpoint = `${API_URL}${Account}getfollower`;
    const account = JSON.parse(
      await AsyncStorage.getItem(ASYNC_STORAGE.ACCOUNT),
    );
    const result = await fetch(endpoint, {
      method: 'GET',
      headers: {
        Authorization: ` Bearer ${account.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(e => {
        return e.text();
      })
      .then(text => {
        return JSON.parse(text);
      })
      .catch(function (error) {});

    return result;
  },
  getfollowerbyid_user: async id_user => {
    const endpoint = `${API_URL}${Account}getfollowerbyid_user`;
    const result = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({id_user}),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(e => {
        return e.text();
      })
      .then(text => {
        return JSON.parse(text);
      })
      .catch(function (error) {});

    return result;
  },
  getfollowerbyid_follower: async id_user => {
    const endpoint = `${API_URL}${Account}getfollowerbyid_follower`;
    const result = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({id_user}),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(e => {
        return e.text();
      })
      .then(text => {
        return JSON.parse(text);
      })
      .catch(function (error) {});

    return result;
  },
  get_follower_id_user_id_follower: async id_follower => {
    const endpoint = `${API_URL}${Account}get_follower_id_user_id_follower`;
    const account = JSON.parse(await AsyncStorage.getItem('account'));
    const result = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(id_follower),
      headers: {
        Authorization: ` Bearer ${account.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(e => {
        return e.text();
      })
      .then(text => {
        return JSON.parse(text);
      })
      .catch(function (error) {});

    return result;
  },
  getfollowerofme: async () => {
    const endpoint = `${API_URL}${Account}getfollowerofme`;
    const account = JSON.parse(await AsyncStorage.getItem('account'));
    const result = await fetch(endpoint, {
      method: 'GET',
      headers: {
        Authorization: ` Bearer ${account.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(e => {
        return e.text();
      })
      .then(text => {
        return JSON.parse(text);
      })
      .catch(function (error) {});

    return result;
  },
  CheckOldPassword: async old_password => {
    const endpoint = `${API_URL}${Account}check_password`;
    const account = JSON.parse(await AsyncStorage.getItem('account'));

    const result = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({old_password}),
      headers: {
        Authorization: ` Bearer ${account.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(e => {
        return e.text();
      })
      .then(text => {
        return JSON.parse(text);
      })
      .catch(function (error) {});
    return result;
  },
  ChangePassWord: async new_password => {
    try {
      const endpoint = `${API_URL}${Account}change_password`;
      const account = JSON.parse(await AsyncStorage.getItem('account'));

      const result = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({new_password}),
        headers: {
          Authorization: ` Bearer ${account.token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then(e => {
          return e.text();
        })
        .then(text => {
          return JSON.parse(text);
        })
        .catch(function (error) {});
      return result;
    } catch (error) {}
  },
  CheckEmail: async email => {
    try {
      const endpoint = `${API_URL}${Account}checkemail_forgotpass`;
      const result = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({email}),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then(e => {
          return e.text();
        })
        .then(text => {
          return JSON.parse(text);
        })
        .catch(function (error) {});

      return result;
    } catch (error) {}
  },
  FogotPassword: async fogotpassword => {
    try {
      const endpoint = `${API_URL}${Account}forgot_password`;
      const result = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(fogotpassword),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then(e => {
          return e.text();
        })
        .then(text => {
          return JSON.parse(text);
        })
        .catch(function (error) {});
      return result;
    } catch (error) {}
  },
};

export default ApiAccountUntil;
