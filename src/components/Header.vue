<script>
import Dropdown from "./UI/Dropdown";
import { mapMutations, mapGetters } from "vuex";
export default {
	components: { Dropdown },
	data: () => ({
		items: ["en", "ru"]
	}),
	computed: {
		...mapGetters(["get_lang"])
	},
	methods: {
		...mapMutations(["CHANGE_LANG"])
	}
};
</script>

<template>
	<header class="header">
		<div class="container header__main">
			<!-- v-spacer -->
			<div></div>
			<!--  -->
			<h2 class="header__title">
				GeoIP
			</h2>
			<Dropdown :items="items" :value="get_lang" @click="CHANGE_LANG" />
		</div>
	</header>
</template>

<style scoped>
@import url("~@/styles/Header.css");
</style>
