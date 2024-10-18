<template>
	<v-container class="mt-15">
		<v-card class="mx-auto bg-transparent" max-width="500px">
			<v-card-title class="mt-15 font-weight-bold">CADASTRO</v-card-title>
		</v-card>
		<v-card class="mx-auto bg-support" rounded="xl" max-width="500px">
			<v-form @submit.prevent="register">
				<v-card-text class="pt-12 px-4">
					<v-row no-gutters>
						<v-col cols="12">
							<v-text-field
								variant="outlined"
								v-model="nome"
								prepend-inner-icon="mdi-account-outline"
								label="Nome"
								required
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field
								variant="outlined"
								v-model="email"
								prepend-inner-icon="mdi-email-outline"
								label="Email"
								required
							></v-text-field>
						</v-col>
						<v-col cols="12">
							<v-text-field
								variant="outlined"
								v-model="senha"
								label="Senha"
								:type="show ? 'text' : 'password'"
								prepend-inner-icon="mdi-lock-outline"
								:append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
								required
								@click:append-inner="show = !show"
							></v-text-field>
						</v-col>
					</v-row>
				</v-card-text>
				<v-card-actions class="pa-4">
					<v-spacer />
					<v-btn color="primary" type="submit" class="font-weight-bold">Cadastrar</v-btn>
					<v-btn @click="goToLogin" color="secondary" class="font-weight-bold ml-3">Voltar ao Login</v-btn>
				</v-card-actions>
			</v-form>
		</v-card>
	</v-container>
</template>
  
<script>
import ApiService from "../services/apiService";
export default {
	name: "UserRegister",
	data: () => ({
		nome: "",
		email: "",
		senha: "",
		show: false,
	}),
	methods: {
		async register() {
			try {
				await ApiService.register(this.nome, this.email, this.senha);
				this.$router.push("/login");
			} catch (error) {
				alert("Erro ao registrar");
			}
		},
		goToLogin() {
			this.$router.push("/login");
		},
	},
};
</script>
  