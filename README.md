# Paytm_Gateway_Integration



clone this repo to your system 

make sure you paas your 

1. MerchantId
2. API key
3. Web site

To the Paytm/config.js file without that payment will not happen.

After getting API key from paytm make sure to pass it in Paytm/config.js file and rearrange on line in controller/index.js there is pay function user which you have to pass the correct txn_url(variable name), if your API key is of Testing or Production API Key.


Don't be overwhelm by Paytm/checksum.js and Paytm/crypt.js file these files are provided by Paytm.

make sure to " npm i " first
then " npm start "