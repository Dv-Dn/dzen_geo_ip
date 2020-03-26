<script>
import Table from "@/components/Table";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { mapGetters, mapState } from "vuex";

export default {
	components: { Table, Button, Input },
	computed: {
		...mapGetters(["get_lang_data"]),
		...mapState(["result", "history"])
	},
	data: () => ({
		ipAdress: "",
		isValid: true
	}),
	methods: {
		checkValid(value) {
			return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
				value
			);
		},

		getInformation() {
			if (this.checkValid(this.ipAdress)) {
				this.isValid = true;
				this.$store.dispatch("getResult", this.ipAdress);
			} else {
				this.ipAdress = "";
				this.isValid = false;
			}
		},
		inputOnChange(value) {
			if (value.length === 3) {
				this.ipAdress = value + ".";
			}
			if (value.length === 7) {
				this.ipAdress = value + ".";
			}
			if (value.length === 10) {
				this.ipAdress = value + ".";
			}
			if (value.length > 10) this.ipAdress = value;
		},
		clearHistory() {
			this.$store.commit("CLEAR_HISTORY");
		}
	}
};
</script>

<template>
	<main class="container main">
		<div class="main__input-block">
			<Input
				width="100%"
				placeholder="000.000.00.00"
				@change="inputOnChange"
				:value="ipAdress"
				:invalid="!isValid"
			/>
			<Button
				@click="getInformation"
				:value="get_lang_data.getInformation"
				margin="18px 0 0 0"
			/>
		</div>

		<div class="main__result-block">
			<Table
				:head="get_lang_data.resultTable"
				:title="get_lang_data.result"
				:rows="result"
				placeholder="000.000.00.00"
			/>
		</div>

		<div class="main__history-block">
			<Table
				:head="get_lang_data.historyTable"
				:title="get_lang_data.history"
				:rows="history"
				placeholder="000.000.00.00"
			/>
			<Button
				@click="clearHistory"
				:value="get_lang_data.clearHistory"
				margin="18px 0 0 0"
				:disabled="history.length === 0"
			/>
		</div>
	</main>
</template>
<style scoped>
/* @import url("~@/styles/Main.css"); */
</style>
