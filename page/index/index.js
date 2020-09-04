var app = getApp();
import { loadOrg } from '../../utils/api/login'
Page({
	data: {
		
	},
	getPhoneNumber (e) {
		// console.log(e.detail.errMsg)
		// console.log(e.detail.iv)
		// console.log(e.detail.encryptedData)
		console.log(e)
	},
	getuserinfo(e) {
		console.log(e)
	},
	onLoad: function () {
		
	},
	onShow: async function () {
		await loadOrg();
	},

});

