const Util = {
  sizes : ['S','M','L','XL','XXL'],
  objectToQueryParams : (data) => {
  return Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`).join('&');
},
queryParamtoObject : (data) =>{
return Object.fromEntries(new URLSearchParams(data));
},
calculatePercent : (price,discount_price) =>{
  if(price && discount_price)
  {
    return ((discount_price/(price/100))-100) + "%";
  }
  return 100 + "%";
}

}

export default Util;
