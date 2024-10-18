<template>
	<v-container>
		<v-row>
			<v-col v-for="a in atividades" :key="a.id_teste" cols="12" sm="12" md="6" lg="4">
				<v-card class="pa-3 bg-accent" outlined @click="openaDialog(a)" height="100%">
					<v-card-title class="font-weight-bold text-secondary">{{ a.titulo }}</v-card-title>
					<v-card-text>{{ a.descricao }}</v-card-text>
					<v-card-actions>
						<v-spacer />
						<v-btn class="font-weight-bold text-secondary">Ver Atividade</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>

		<v-dialog v-model="isDialogOpen" max-width="800px">
			<v-card>
				<v-card-title class="headline">{{ atividade?.titulo }}</v-card-title>
				<v-card-subtitle>{{ atividade?.descricao }}</v-card-subtitle>
				<v-card-text>
					<div v-for="p in atividade?.perguntas" :key="p.id_pergunta">
						<p>
							<strong>{{ p.texto }}</strong>
						</p>
						<v-radio-group v-model="respostas[p.id_pergunta]">
							<v-radio v-for="op in p.opcoes" :key="op.id_opcao" :label="op.texto" :value="op.id_opcao"></v-radio>
						</v-radio-group>
					</div>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn class="font-weight-bold text-error" @click="isDialogOpen = false">Fechar</v-btn>
					<v-btn class="font-weight-bold text-white" @click="submitAnswers">Enviar Respostas</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-container>
</template>
  
<script>
import ApiService from "@/services/apiService";

export default {
	name: "AtividadesPage",
	data() {
		return {
			atividades: [],
			isDialogOpen: false,
			atividade: null,
			respostas: {},
		};
	},
	methods: {
		async openaDialog(a) {
			this.atividade = await ApiService.getAtividadesById(a.id_teste);
			this.isDialogOpen = true;
			this.respostas = {};
		},
		submitAnswers() {
			console.log("Respostas enviadas:", this.respostas);
			this.isDialogOpen = false;
		},
	},
	async mounted() {
		this.atividades = await ApiService.getAtividades();
	},
};
</script>
  
  <style scoped>
.pa-3 {
	padding: 16px;
}
</style>
  