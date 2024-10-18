<template>
	<v-container>
		<v-row>
			<v-col v-for="c in certificados" :key="c.ID_Certificado" cols="12" sm="12" md="6" lg="4">
				<v-card class="pa-3 bg-accent" outlined @click="opencDialog(c)" height="100%">
					<v-card-title class="font-weight-bold text-secondary">Certificado ID: {{ c.ID_Certificado }}</v-card-title>
					<v-card-subtitle>Curso ID: {{ c.ID_Curso }}</v-card-subtitle>
					<v-card-text>
						<p>
							<strong>Data de Emissão:</strong>
							{{ c.Data_Emissao }}
						</p>
					</v-card-text>
					<v-card-actions>
						<v-spacer />
						<v-btn class="font-weight-bold text-secondary">Ver Certificado</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>

		<v-dialog v-model="isDialogOpen" max-width="800px">
			<v-card>
				<v-card-text>
					<v-img src="../assets/certificado.png" max-height="500px" contain></v-img>
				</v-card-text>
				<v-card-actions>
					<v-spacer />
					<v-btn class="font-weight-bold text-error" @click="isDialogOpen = false">Fechar</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-container>
</template>
  
<script>
export default {
	name: "CertificadosPage",
	data() {
		return {
			certificados: [
				{
					ID_Certificado: 1,
					Data_Emissao: "2024-10-01",
					ID_Usuario: 201,
					ID_Curso: 101,
					Conteudo: "../assets/certificado.png",
				},
				{
					ID_Certificado: 2,
					Data_Emissao: "2024-09-15",
					ID_Usuario: 202,
					ID_Curso: 102,
					Conteudo: "../assets/certificado.png",
				},
				{
					ID_Certificado: 3,
					Data_Emissao: "2024-08-10",
					ID_Usuario: 203,
					ID_Curso: 103,
					Conteudo: "../assets/certificado.png",
				},
			],
			isDialogOpen: false,
			certificado: null,
		};
	},
	methods: {
		opencDialog(c) {
			this.certificado = c;
			this.isDialogOpen = true;
		},
	},
};
</script>
  
  <style scoped>
.pa-3 {
	padding: 16px;
}
</style>
  