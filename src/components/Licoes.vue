<template>
	<v-container>
		<v-list>
			<v-list-item v-for="l in licoes" :key="l.id_licao" @click="openDialog(l)">
				<v-list-item-content>
					<v-list-item-title class="font-weight-bold">{{ l.titulo }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>

		<v-dialog v-model="isDialogOpen" max-width="600px">
			<v-card>
				<v-card-title class="font-weight-bold">{{ licao?.titulo }}</v-card-title>
				<v-card-text>{{ licao?.conteudo }}</v-card-text>
				<v-card-actions>
					<v-spacer />
					<v-btn class="font-weight-bold text-error" @click="isDialogOpen = false">Fechar</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
import ApiService from "@/services/apiService";

export default {
	name: "LicoesPage",
	data() {
		return {
			licoes: [],
			isDialogOpen: false,
			licao: null,
		};
	},
	async mounted() {
		const moduloId = this.$route.params.idmodulo;
		this.licoes = await ApiService.getLicoesByModuloId(moduloId);
	},
	methods: {
		openDialog(l) {
			this.licao = l;
			this.isDialogOpen = true;
		},
	},
};
</script>
