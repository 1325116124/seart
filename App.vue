<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {font-family: "iconfont";
	  src: url('~@/static/font/iconfont.eot?t=1617880357054'); /* IE9 */
	  src: url('~@/static/font/iconfont.eot?t=1617880357054#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
	  url('~@/static/font/iconfont.woff?t=1617880357054') format('woff'),
	  url('~@/static/font/iconfont.ttf?t=1617880357054') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('~@/static/font/iconfont.svg?t=1617880357054#iconfont') format('svg'); /* iOS 4.1- */
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-luotuo:before {
	  content: "\e77e";
	}
	
	.icon-location:before {
	  content: "\e611";
	}
	
	.icon-fangdajing:before {
	  content: "\e637";
	}
	
	.icon-wode:before {
	  content: "\e6f3";
	}
	
	.icon-shoucang:before {
	  content: "\e698";
	}
	
	.icon-dingdan-:before {
	  content: "\e638";
	}
	
	.icon-shizhong:before {
	  content: "\e72a";
	}
	
	.icon-fenxiang:before {
	  content: "\e6d1";
	}
	
	
</style>
