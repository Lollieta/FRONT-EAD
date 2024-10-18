<template>
	<v-app-bar app color="secondary" dark fixed>
		<v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
		<v-toolbar-title @click="$router.push(`/home`)">
			<v-btn></v-btn>Ead Apgb Ink
		</v-toolbar-title>
		<v-spacer />
		<div class="d-none d-md-flex">
			<v-btn
				v-for="(m,i) in menu"
				:key="i"
				text
				color="white"
				@click="$router.push(`/${m.url}`)"
			>{{ m.title }}</v-btn>
			<v-btn color="accent" dark class="font-weight-bold" @click="logout">Sair</v-btn>
		</div>
	</v-app-bar>

	<v-navigation-drawer v-model="drawer" app temporary>
		<v-list>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title>Bem-vindo, {{ user?.nome }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list-item v-for="(m,i) in menu" :key="i" @click="$router.push(`/${m.url}`)">
				<v-list-item-title>{{ m.title }}</v-list-item-title>
			</v-list-item>
			<v-list-item @click="logout">
				<v-list-item-title class="text-accent font-weight-bold">Sair</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import ApiService from "@/services/apiService";

export default {
	name: "HeaderPage",
	props: {
		menu: {
			type: Array,
			required: true,
		},
	},
	data: () => ({
		user: JSON.parse(localStorage.getItem("user")),
		drawer: false,
	}),
	methods: {
		logout() {
			ApiService.logout();
			this.$router.push("/login");
		},
	},
};
</script>

<style scoped>
.v-application--wrap {
	margin-top: 64px;
}
</style>
