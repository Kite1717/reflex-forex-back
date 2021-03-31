const axios = require("axios");
const API_INFO = require("../../config/forexapi");

const ROOT_URL = "https://api.launchfxm.com/api_v1/";

const postfixHelper = (MainPassword) => {
  return (
    "Group=" +
    API_INFO.Group +
    "&" +
    "MainPassword=" +
    MainPassword +
    "&" +
    "InvestPassword=" +
    API_INFO.InvestPassword +
    "&" +
    "PhonePassword=" +
    API_INFO.PhonePassword +
    "&" +
    "auth=" +
    API_INFO.Auth
  );
};


const authPostfixHelper = () => {
  return (
    "auth=" +
    API_INFO.Auth
  );
};




export async function createUser(account) {
  let url = ROOT_URL + "create_user?";

 
  for (let info in account) {
    url += info.toString() + "=" + account[info] + "&";
  }
  
  url += postfixHelper(account.MainPassword);

  const {data} =  await axios.get(url);

  return data;
}//end of create User


export async function updateUser(account) {
  let url = ROOT_URL + "update_user?";

 
  for (let info in account) {
    url += info.toString() + "=" + account[info] + "&";
  }
  
  url += postfixHelper();

  const {data:{data}} =  await axios.get(url);

  return data;
}//end of update User

export async function deleteUser(account) {
  let url = ROOT_URL + "delete_user?";

 
  for (let info in account) {
    url += info.toString() + "=" + account[info] + "&";
  }
  
  url += authPostfixHelper();

  const{ data:{data}} =  await axios.get(url);

  return data[0].error === 0;

}//end of delete User


export async function getUser(account) {
  let url = ROOT_URL + "user?";

 
  for (let info in account) {
    url += info.toString() + "=" + account[info] + "&";
  }
  
  url += authPostfixHelper();

  const{ data:{data}} =  await axios.get(url);

  return data;

}//end of get User



export async function accountDeposit(account) {
  let url = ROOT_URL + "account_deposit?";

 
  for (let info in account) {
    url += info.toString() + "=" + account[info] + "&";
  }
  
  url += authPostfixHelper();

  const{ data} =  await axios.get(url);

  return data.data === 0;

}//end of deposit




export async function accountWithdraw(account) {
  let url = ROOT_URL + "account_withdraw?";

 
  for (let info in account) {
    url += info.toString() + "=" + account[info] + "&";
  }
  
  url += authPostfixHelper();

  const{ data} =  await axios.get(url);

  return data.data === 0;

}//end of withdraw

export async function creditIn(account) {
  let url = ROOT_URL + "account_creditIn?";

 
  for (let info in account) {
    url += info.toString() + "=" + account[info] + "&";
  }
  
  url += authPostfixHelper();

  const{ data} =  await axios.get(url);

  return data.data === 0;

}//end of credit in

export async function creditOut(account) {
  let url = ROOT_URL + "account_creditOut?";

  for (let info in account) {
    url += info.toString() + "=" + account[info] + "&";
  }
  
  url += authPostfixHelper();

  const{ data} =  await axios.get(url);

   // console.log(JSON.stringify(data,null,2))
  return data.data === 0;

}//end of credit out




export async function getHistory(account) {
  let url = ROOT_URL + "get_history?";

  for (let info in account) {
    url += info.toString() + "=" + account[info] + "&";
  }
  
  url += authPostfixHelper();

  const{ data:{data}} =  await axios.get(url);
 return data[0];

}//end of get history



export async function getTotalHistory(account) {
  let url = ROOT_URL + "total_history?";

  for (let info in account) {
    url += info.toString() + "=" + account[info] + "&";
  }
  
  url += authPostfixHelper();

  const{ data:{data}} =  await axios.get(url);

  console.log(data,"wwwwwwww")
 //return data[0];

}//end of get history






