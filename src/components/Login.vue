<template>
	<v-container class="mt-15">
		<v-card class="mx-auto bg-transparent" max-width="500px" variant="flat">
			<v-card-title class="mt-15 font-weight-bold">LOGIN</v-card-title>
		</v-card>
		<v-card class="mx-auto bg-support" rounded="xl" max-width="500px">
			<v-form @submit.prevent="login">
				<v-card-text class="pt-12 px-4">
					<v-row no-gutters>
						<v-col cols="12">
							<v-text-field
								variant="outlined"
								small
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
					<v-btn color="primary" type="submit" class="font-weight-bold">Entrar</v-btn>
					<v-btn @click="goToCadastro" color="secondary" class="font-weight-bold ml-3">Cadastrar-se</v-btn>
				</v-card-actions>
			</v-form>
		</v-card>
	</v-container>
</template>
  
<script>
import ApiService from "../services/apiService";
export default {
	name: "UserLogin",
	data: () => ({
		email: "",
		senha: "",
		show: false,
	}),
	methods: {
		async login() {
			try {
				const response = await ApiService.login(this.email, this.senha);
				console.log(response.usuario);
				localStorage.setItem("user", JSON.stringify(response.usuario));
				this.$router.push("/home");
			} catch (error) {
				alert("Falha ao logar");
			}
		},
		goToCadastro() {
			this.$router.push("/register");
		},
	},
};
</script>
  