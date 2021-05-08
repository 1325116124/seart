const BASE_URL = "http://112.74.59.218:8080"
export const myRequest = (option) => {
	return new Promise((resolve) => {
		uni.request({
			url:BASE_URL+option.url,
			method:option.method || "GET",
			data: option.data || {},
			header: option.header || {'Content-Type':'application/json'},
			success: (res) => {
				if(res.data.status!==0){
					return uni.showToast({
						title:"获取数据失败"
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title:"请求接口失败"
				})
				reject(err)
			}
		})
	})
}