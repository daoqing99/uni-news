'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('user')
	// 增加
	// let res = collection.add({
	// 	name:'王久'
	// })
	// let res = await collection.add([{
	// 	name:'vue'
	// },{
	// 	name:"html",
	// 	type:'前端'
	// }])
	
	// 删除
	// let res = await collection.doc('5ecf343309e2e5004d2e1cc7').remove()
	
	// 更新
	// let res = await collection.doc('5ecf343309e2e5004d2e1cc8').update({
	// 	name:"css",
	// 	type:'后台',
	// 	age:'31'
	// })
	// update只能更新存在的记录,set如果存在就更新，不存在就添加
	// let res = await collection.doc('5ecf343309e2e5004d2e1cc8').set({
	// 	name:"js",
	// 	type:'buzhi',
	// 	age:'fds'
	// })
	
	// 查找
	// const res = await collection.doc('5ecf343309e2e5004d2e1cc8').get()
	const res = await collection.where({
		name:event.name
	}).get()
	// console.log(JSON.stringify(res))
  //event为客户端上传的参数
    // console.log('event : ' + event)
  //返回数据给客户端
  return {
	  code:200,
	  msg:'查询成功',
	  data:res.data
  }
};
