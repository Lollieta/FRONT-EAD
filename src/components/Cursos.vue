<template>
	<v-container>
		<v-row>
			<v-col v-for="c in cursos" :key="c.ID_Curso" cols="12" sm="12" md="6" lg="4">
				<v-card class="pa-3 bg-accent" @click="$router.push(`/modulos/${c.id_curso}`)" height="100%">
					<v-card-title class="font-weight-bold text-secondary">{{ c.titulo }}</v-card-title>
					<v-card-subtitle>Instrutor ID: {{ c.id_instrutor }}</v-card-subtitle>
					<v-card-text>{{ c.descricao }}</v-card-text>
					<v-card-actions>
						<v-spacer />
						<v-btn class="font-weight-bold text-secondary">Ver Módulos</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
  
<script>
import ApiService from "@/services/apiService";

export default {
	name: "CursosPage",
	data() {
		return {
			cursos: [],
		};
	},
	async mounted() {
		try {
			this.cursos = await ApiService.getCursos();
		} catch (error) {
			console.error("Erro ao buscar cursos:", error);
		}
	},
};
</script>
