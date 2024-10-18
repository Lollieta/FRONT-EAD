<template>
	<v-container>
		<v-row>
			<v-col v-for="m in modulos" :key="m.id_modulo" cols="12" sm="12" md="6" lg="4">
				<v-card class="pa-3 bg-accent" @click="$router.push(`/licoes/${m.id_modulo}`)" height="100%">
					<v-card-title class="font-weight-bold text-secondary">{{ m.titulo }}</v-card-title>
					<v-card-text>{{ m.descricao }}</v-card-text>
					<v-card-actions>
						<v-spacer />
						<v-btn class="font-weight-bold text-secondary">Ver Lições</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import ApiService from "@/services/apiService";

export default {
	name: "ModulosPage",
	data() {
		return {
			modulos: [],
		};
	},
	async mounted() {
		const cursoId = this.$route.params.idcurso;
		this.modulos = await ApiService.getModulosByCursoId(cursoId);
	},
};
</script>
