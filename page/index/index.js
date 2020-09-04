var app = getApp();
import { loadOrg } from '../../utils/api/login'
Page({
	data: {
		
	},
	onLoad: function () {
		
	},
	onShow: async function () {
		await loadOrg();
	},

});

