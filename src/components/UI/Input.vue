<script>
export default {
	props: {
		placeholder: String,
		value: String,
		invalid: {
			type: Boolean,
			default: false
		},
		margin: {
			type: String,
			default: "0"
		},
		width: String
	},
	methods: {}
};
</script>

<template>
	<div :style="{ margin, width }">
		<label>
			<input
				type="text"
				:placeholder="invalid ? '' : placeholder"
				@input="$emit('change', $event.target.value)"
				:value="value"
			/>
			<div :class="{ Input__error: invalid }"></div>
		</label>
	</div>
</template>

<style scoped>
@import url("~@/styles/Input.css");
</style>
