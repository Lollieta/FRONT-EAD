<template>
	<v-container>
		<v-card class="mb-4">
			<v-card-title>{{ forumTitle }}</v-card-title>
			<v-card-subtitle>{{ forumDescription }}</v-card-subtitle>
			<v-card-text>{{ forumContent }}</v-card-text>
		</v-card>

		<v-list class="mb-4 bg-grey-darken-3 scrollable-list">
			<v-list-item>
				<v-list-item-title class="text--secondary">Mensagens</v-list-item-title>
			</v-list-item>
			<v-list-item v-for="(message, index) in messages" :key="index" class="mb-3">
				<v-list-item-content>
					<v-list-item-title class="text--secondary">{{ message.usuarioNome || 'Anônimo' }}</v-list-item-title>
					<v-list-item-subtitle>{{ message.dataPublicacao }}</v-list-item-subtitle>
					<v-list-item-content>{{ message.conteudo }}</v-list-item-content>
				</v-list-item-content>
			</v-list-item>
		</v-list>

		<v-card class="pa-3">
			<v-text-field
				class="mb-n5"
				v-model="newMessage"
				label="Digite sua mensagem"
				clearable
				@keyup.enter="sendMessage"
				append-inner-icon="mdi-send-circle"
				@click:append-inner="sendMessage"
			/>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: "ForumPage",
	data: () => ({
		forumTitle: "Título do Fórum",
		forumDescription: "Descrição do Fórum",
		forumContent: "Conteúdo inicial ou regras do fórum.",
		messages: [
			{
				usuarioNome: "Carlos Silva",
				dataPublicacao: "2024-10-10",
				conteudo: "Essa é uma mensagem de exemplo no fórum.",
			},
			{
				usuarioNome: "Ana Maria",
				dataPublicacao: "2024-10-12",
				conteudo: "Muito interessante esse tópico!",
			},
		],
		newMessage: "",
	}),
	methods: {
		sendMessage() {
			if (this.newMessage.trim()) {
				const newMsg = {
					usuarioNome: "Usuário Atual",
					dataPublicacao: new Date().toISOString().slice(0, 10),
					conteudo: this.newMessage,
				};
				this.messages.push(newMsg);
				this.newMessage = "";
			}
		},
	},
};
</script>

<style scoped>
.v-list-item-content {
	margin-bottom: 8px;
}
.scrollable-list {
	height: 50vh;
	overflow-y: auto;
}
</style>
