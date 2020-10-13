import listView from '../components/listView'
import li1 from '../components/view/li1'
import li2 from '../components/view/li2'

import fromView from '../components/fromView'
import fromTable from '../components/fromTable'
import from1 from '../components/view/from1'
import from2 from '../components/view/from2'
import from3 from '../components/view/from3'

import BusService from '../components/BusService'

import introduce from '../components/static/introduce'
import introduce2 from '../components/static/introduce2'

//配置路由，path就是你浏览器地址，component就是跟着你要显示的页面，/表示默认地址。
export default [
	{ path: '/introduce', component: introduce },
	{ path: '/introduce2', component: introduce2 },
	{ path: '/fromView', component: fromView },
	{ path: '/', component: BusService },
	{
		path: '/fromTable',
		component: fromTable,
		children: [
			{ path: '/from1', name: 'from1', component: from1 },
			{ path: '/from2', name: 'from2', component: from2 },
			{ path: '/from3', name: 'from3', component: from3 }
		]
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