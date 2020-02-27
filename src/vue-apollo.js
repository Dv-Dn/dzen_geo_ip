import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

export const apolloClient = new ApolloClient({
	uri: "https://api.everbase.co/graphql?apikey=alpha"
});
export const apolloProvider = new VueApollo({
	defaultClient: apolloClient
});
