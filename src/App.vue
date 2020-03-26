<script>
// import ApolloExample from "./components/ApolloExample";
import Main from "@/views/Main";
import Header from "@/components/Header";

export default {
	name: "App",
	components: {
		Main,
		Header
	}
};
</script>

// * HTML/CSS
<template>
	<div id="app">
		<Header></Header>
		<Main />
	</div>
</template>

<style>
	@import '~@/styles/main.css';
</style>
