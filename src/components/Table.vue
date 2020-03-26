<script>
export default {
	props: {
		title: String,
		head: Object,
		rows: [Array, Object],
		placeholder: String,
		maxWidth: {
			type: String,
			default: "100%"
		}
	}
};
</script>
<template>
	<table class="table" :style="{ 'max-width': maxWidth }">
		<caption v-if="title != ''" class="table__title">
			{{
				title
			}}
		</caption>
		<tr class="table__head-row">
			<th :key="item" v-for="item in head" class="table__th">{{ item }}</th>
		</tr>
		<!-- placeholder value. Something like 000.000.00.00 -->
		<tr
			v-if="(rows.length === 0 || rows[0].length === 0) && placeholder != ''"
			class="table__tr"
		>
			<td
				:key="'--' + i"
				v-for="(a, n, i) in head"
				v-html="i === 0 ? placeholder : ''"
				class="table__td"
			></td>
		</tr>
		<!-- Rows -->
		<tr
			:key="'-' + i"
			v-for="(row, i) of rows"
			v-show="row.length !== 0"
			class="table__tr"
		>
			<td :key="item + i" v-for="(item, i) in row" class="table__td">
				{{ item }}
			</td>
		</tr>
	</table>
</template>
