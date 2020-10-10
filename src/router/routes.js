import listView from '../components/listView'
import li1 from '../components/view/li1'
import li2 from '../components/view/li2'

import fromView from '../components/fromView'
//配置路由，path就是你浏览器地址，component就是跟着你要显示的页面，/表示默认地址。
export default [
	{
		path: '/',
		component: fromView
	},
	{
		path: "/listView",
		component: listView,
		children: [
			{ path: '/', name: 'li1', component: li1 },
			{ path: '/li2', name: 'li2', component: li2 }
		]
	}
]