// const urls = {
//   topSales: 'http://localhost:7070' + '/api/top-sales',
//   categories: 'http://localhost:7070' + '/api/categories',
//   items: 'http://localhost:7070' + '/api/items',
// 	order: 'http://localhost:7070' + '/api/order',
// }

const urls = {
  topSales: process.env.REACT_APP_BACKEND_HOST + '/api/top-sales',
  categories: process.env.REACT_APP_BACKEND_HOST + '/api/categories',
  items: process.env.REACT_APP_BACKEND_HOST + '/api/items',
	order: process.env.REACT_APP_BACKEND_HOST + '/api/order',
}

export default urls;