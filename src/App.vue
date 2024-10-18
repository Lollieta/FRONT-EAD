<template>
	<v-app>
		<HeaderPage :menu="menu" />
		<v-main class="bg-grey-darken-2">
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
import HeaderPage from "./components/Header.vue";

export default {
	name: "App",
	components: {
		HeaderPage,
	},
	data: () => ({
		menu: [
			{
				color: "secondary",
				icon: "mdi-cast-education",
				title: "Cursos",
				url: "cursos",
				subtitle: "Acesse os cursos disponíveis",
			},
			{
				color: "info",
				icon: "mdi-book-open",
				title: "Atividades",
				url: "atividades",
				subtitle: "Veja suas atividades programadas",
			},
			{
				color: "success",
				icon: "mdi-certificate",
				title: "Certificados",
				url: "certificados",
				subtitle: "Verifique seus certificados obtidos",
			},
			{
				color: "purple",
				icon: "mdi-forum",
				title: "Fórum",
				url: "forum",
				subtitle: "Participe das discussões e tire dúvidas",
			},
		],
	}),
};
</script>

