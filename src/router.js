import Vue from 'vue';
import Router from 'vue-router';

import Index from './views/Index';
import Preview from './views/Preview';

Vue.use(Router);
let routes = [{
		path: "/",
		component: Index,
		name: 'index',
		meta: {
			title: 'Форма',
			key: 1,
		},
	},

	{
		path: "*",
		component: Index,
		name: 'index',
		meta: {
			title: 'Форма',
			key: 101,
		},
	},

	{
		path: "/preview",
		component: Preview,
		name: 'preview',
		meta: {
			title: 'Превью',
			key: 2,
		},
	},
];


const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title;
  })
});

export default router
