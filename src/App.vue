<template lang="pug">
	main.main
		.main__content
			<Header :page="key"/>
				<transition name="fade" mode="out-in">
					<router-view :key="key" ref='page'></router-view>
				</transition>
		<Footer :page="key" />
</template>

<script>
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
export default {
	components: {
		Header,
		Footer,
	},
	computed: {
		key() {
			return this.$route.meta.key !== undefined 
				? this.$route.meta.key : this.$route;
		},
	},
};
</script>

<style lang="stylus">
.main
	pos relative
	display flex
	flex-direction column
	height 100%

	&__content 
		flex 1 0 auto
</style>