<script>
export default {
	props: {
		value: String,
		disabled: Boolean,
		margin: {
			type: String,
			default: "0"
		}
	}
};
</script>
<template>
	<div :style="{ margin }">
		<button
			:class="{ button_disabled: disabled }"
			@click="disabled ? null : $emit('click')"
		>
			{{ this.value }}
		</button>
	</div>
</template>

<style scoped>
@import url("~@/styles/Button.css");
</style>
