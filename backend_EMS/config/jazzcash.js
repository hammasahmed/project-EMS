//@ts-ignore
import  Jazzcash from "jazzcash-checkout"

// initializes your jazzcash
Jazzcash.credentials({
  config: {
    merchantId: 'MC137527', // Merchant Id
    password: '4vyb19vv0w', // Password
    hashKey: 'sv93ug75ww', // Hash Key
  },
  environment: 'sandbox', // available environment live or sandbox
});
const JC = {
  wallet: (data, callback) => {
    Jazzcash.setData(data);
    Jazzcash.createRequest('WALLET').then(res => {
      res = JSON.parse(res);
      console.log(res);

      // callback function
      callback(res);
    });
  },

  pay: (data, callback) => {
    Jazzcash.setData(data);
    Jazzcash.createRequest('PAY').then(res => {
      console.log(res);

      // callback function
      callback(res);
    });
  },

  // refund: (data, callback) => {
  //   Jazzcash.setData(data);
  //   Jazzcash.createRequest('REFUND').then(res => {
  //     res = JSON.parse(res);
  //     console.log(res);

  //     // callback function
  //     callback(res);
  //   });
  // },

  // inquiry: (data, callback) => {
  //   Jazzcash.setData(data);
  //   Jazzcash.createRequest('INQUIRY').then(res => {
  //     res = JSON.parse(res);
  //     console.log(res);

  //     // callback function
  //     callback(res);
  //   });
  // },
};

export default JC;

// export default JC;
