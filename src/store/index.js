import Vue from "vue";
import Vuex from "vuex";
import langs from "./langs";
import gql from "graphql-tag";
import { apolloClient } from "../vue-apollo";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		ip: "",
		result: [],
		history: []
	},
	mutations: {
		CLEAR_HISTORY(state) {
			state.history = [];
		},
		SET_ERROR_RESULT(state, payload) {
			let res = {
				ipAdress: payload,
				continentCode: "—",
				countryCode: "—",
				city: "—",
				postcode: "—",
				coordinates: "—"
			};
			let result = [];
			result[0] = res;
			state.result = result;
		},
		SET_RESULT(state, payload) {
			let res = {
				ipAdress: payload.address,
				continentCode:
					payload.country.continent.name +
					"/" +
					payload.country.continent.geonamesID,
				countryCode: payload.country.name + "/" + payload.country.geonamesID,
				city: payload.city.name,
				postcode: payload.country.currencies[0].isoCode,
				coordinates:
					payload.country.location.lat + "/" + payload.country.location.long
			};
			let hisItem = {
				ipAdress: payload.address,
				countryCode: payload.country.name + "/" + payload.country.geonamesID,
				city: payload.city.name
			};
			let result = [];
			result[0] = res;
			state.result = result;

			let history = [...state.history];
			history.push(hisItem);
			state.history = history;
		}
	},
	actions: {
		async getResult({ commit }, payload) {
			try {
				let response = await apolloClient.query({
					query: gql`
						{
							ipAddress(address: $ipAddress) {
								address
								country {
									name
									geonamesID
									currencies {
										isoCode
									}
									location {
										lat
										long
									}
									continent {
										name
										geonamesID
									}
								}
								city {
									name
								}
							}
						}
					`,
					variables: {
						ipAddress: payload
					}
				});
				commit("SET_RESULT", response.data.ipAddress);
			} catch (e) {
				commit("SET_ERROR_RESULT", payload);
				// console.log(e);
			}
		}
	},
	modules: { langs }
});
