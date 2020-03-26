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
	<div :style="{ margin }" class="button-block">
		<button
			:class="{ button_disabled: disabled }"
			@click="disabled ? null : $emit('click')"
			class="button"
		>
			{{ this.value }}
		</button>
	</div>
</template>
