// 显示与隐藏hidden


<view bindtap='clickMe'>点击</view>
    //这是显示隐藏的部分
    <view hidden="{{hiddenName}}">隐藏显示部分</view>

page({
    data:{
        hiddenName:true
    },
    clickMe:function(e){
        this.setData({
            hiddenName:!this.data.hiddenName
        })
    }
})
