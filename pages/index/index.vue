<template>
	<view class="content">
		<image class="logo" :src="imgUrl"></image>
		<view class="text-area">
			<!-- <text class="title">{{title}}</text> -->
			<button type="default" @click="open()">执行云函数</button>
			<button type="default" @click="upLoad()">上传图片</button>
			<button type="default" @click="delImg()">删除图片</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				imgUrl:'/static/logo.png'
			}
		},
		onLoad() {
		
		},
		methods: {
			delImg(){
				uniCloud.deleteFile({
					fileList:['https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uninewstest/36d59bd0-a0cd-11ea-a30b-e311646dfaf2.jpeg'],
					success: (res) => {
						console.log(res)
					},
					fail(err){
						console.log(err)
					}
				})
			},
			upLoad(){
				uni.chooseImage({
					count:1,
					success:(res) => {
						const tempFile = res.tempFilePaths[0]
						console.log(tempFile)
						uniCloud.uploadFile({
							filePath:tempFile,
							success: (res) => {
								console.log(res)
								this.imgUrl = res.fileID
								// this.imgUrl = res.filePath
							},
							fail(err){
								console.log(err)
							}
						})
					},
					fail(err) {
						console.log(err)
					}
				})
			},
			open(){
				uniCloud.callFunction({
					name:'get_list',
					data:{
						"name":'js'
					},
					success(res){
						console.log(res)
					},
					fail(err){
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
