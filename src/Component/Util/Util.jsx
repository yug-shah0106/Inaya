const Util = {
  sizes : ['S','M','L','XL','XXL'],
  objectToQueryParams : (data) => {
  return Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`).join('&');
},
queryParamtoObject : (data) =>{
return Object.fromEntries(new URLSearchParams(data));
}
}

export default Util;
