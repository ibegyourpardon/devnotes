<view class="userinfo">
  <view class="userinfo-avatar">
    <open-data  type="userAvatarUrl"></open-data>
  </view>
    <open-data type="userNickName"></open-data>
</view>




.userinfo {
  position: relative;
  width: 750rpx;
  height: 320rpx;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  overflow:hidden;
  display: block;
  width: 160rpx;
  height: 160rpx;
  margin: 20rpx;
  margin-top: 50rpx;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
}

.userinfo text {
  /* color: #fff; */
  font-size: 14px;
  background-color: #c0c0c0;
  border-radius:40%;
}
