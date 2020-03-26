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
	}
};
</script>

<template>
	<div :style="{ margin, width }" class="input">
		<label class="input__label">
			<input
				class="input__field"
				type="text"
				:placeholder="invalid ? '' : placeholder"
				@input="$emit('change', $event.target.value)"
				:value="value"
			/>
			<div :class="{ Input__error: invalid }" class="input__border"></div>
		</label>
	</div>
</template>
