import en from "@/lang/en.json";
import ru from "@/lang/ru.json";
export default {
	state: { lang: "en", langData: { en, ru } },
	getters: {
		get_lang_data: state => {
			return state.langData[state.lang];
		},
		get_lang: state => {
			return state.lang;
		}
	},
	mutations: {
		CHANGE_LANG(state, payload) {
			state.lang = payload;
		}
	}
};
