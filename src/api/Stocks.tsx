/* function to get the data from api */
export function getStocks() {
    const data= require('../data/list.json')
    return data;
}