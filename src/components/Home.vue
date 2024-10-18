<template>
	<div>
		<v-container class="mt-md-10">
			<v-row>
				<v-col cols="12" sm="12" md="6" lg="6" v-for="(m,i) in menu" :key="i">
					<v-card class="pa-3" :color="m.color" @click="$router.push(`/${m.url}`)">
						<v-row>
							<v-col cols="auto" class="d-flex align-center justify-center">
								<v-icon :icon="m.icon" size="60" end></v-icon>
							</v-col>
							<v-col>
								<v-card-title>{{ m.title }}</v-card-title>
								<v-card-text>{{ m.subtitle }}</v-card-text>
							</v-col>
						</v-row>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	name: "HomePage",
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
