if (process.env.NODE_ENV === 'development') {
    //var apiRoot = 'http://localhost/api';
	var apiRoot = 'https://api.xueycloud.com/api';
}
if (process.env.NODE_ENV === 'production') {
    var apiRoot = 'https://api.xueycloud.com/api';
}

let api = {
	static:'https://singledemo.photo.xueycloud.com',
	root: apiRoot,
	login:apiRoot+'/login/auth/uniquedlogin',
	site:apiRoot+'/login/auth/siteinfo',
	channels:apiRoot+'/v1/channels/',
	contents:apiRoot+'/v1/contents',
	siteinfo:apiRoot+'/v1/stl/site',
}
export default api;