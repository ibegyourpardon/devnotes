1 失焦事件
<input type="text" @blur="onBlur">

onBlur () {
    window.scrollTo(0, 0)
},


2 for iOS ，Android 没测试

<script>
	var u = navigator.userAgent, app = navigator.appVersion
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	$(document).ready(function(){
		$("input").blur(function(){
			if (isIOS) {
				blurAdjust()
				// alert("1231321233")
			}
		});
	});
	// 解决苹果不回弹页面
	function blurAdjust(e){
		setTimeout(()=>{
			// alert("1231321233")
			if(document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA'){
				return
			}
			let result = 'pc';
			if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
					result = 'ios'
			}else if(/(Android)/i.test(navigator.userAgent)) {  //判断Android
					result = 'android'
			}
			
			if( result = 'ios' ){
				document.activeElement.scrollIntoViewIfNeeded(true);
			}
		},100)
	}
</script>