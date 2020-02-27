<script>
export default {
	props: {
		items: Array,
		value: String
	},
	data: () => ({
		isOpen: false
	}),
	methods: {
		onClick(item) {
			if (item !== this.value) {
				this.$emit("click", item);
				this.isOpen = false
			}
		}
	}
};
</script>

<template>
	<div class="dropdown">
		<div class="dropdown__backdrop" @click="isOpen = false" v-if="isOpen"></div>
		<div class="dropdown__main">
			<div @click="isOpen = !isOpen">
				{{ value }}

				<span
					:class="{ dropdown__icon__animate: isOpen }"
					class="dropdown__icon"
					><svg
						width="10"
						height="7"
						viewBox="0 0 10 7"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5 8.74228e-07L9.33012 6.75L0.669872 6.75L5 8.74228e-07Z"
							fill="white"
						/>
					</svg>
				</span>
			</div>
			<transition name="fade">
				<ul v-if="isOpen" class="dropdown__list">
					<li
						:key="item"
						v-for="item in items"
						@click="onClick(item)"
						class="dropdown__li"
						:class="{
							dropdown__li__active: item.toLowerCase() === value.toLowerCase()
						}"
					>
						{{ item }}
					</li>
				</ul>
			</transition>
		</div>
	</div>
</template>
<style scoped>
@import url("~@/styles/Dropdown.css");
</style>
