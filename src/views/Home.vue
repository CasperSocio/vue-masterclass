<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store'
import { useCounterStore } from '@/stores/counter.store'
import { Button, Header } from '@caspersocio/vue-masterclass-library'

const auth = useAuthStore()
const counter = useCounterStore()

const handleDecrement = () => {
	counter.decrement()
}

const handleIncrement = () => {
	counter.increment()
}
</script>

<template>
	<Header brand-name="Vue Masterclass" />

	<div class="wrapper">
		<div>
			<a
				href="https://vitejs.dev"
				target="_blank">
				<img
					src="/vite.svg"
					class="logo"
					alt="Vite logo">
			</a>
			<a
				href="https://vuejs.org/"
				target="_blank">
				<img
					src="../assets/vue.svg"
					class="logo vue"
					alt="Vue logo">
			</a>
		</div>
		<h1>Vite + Vue</h1>

		<div class="card">
			<p>Count is {{ counter.count }}</p>

			<!-- Decrement button -->
			<Button
				variant="secondary"
				@click="handleDecrement">
				decrement
			</Button>

			<!-- Increment button -->
			<Button
				variant="primary"
				@click="handleIncrement">
				increment
			</Button>

			<p>
				Edit
				<code>components/HelloWorld.vue</code> to test HMR
			</p>
		</div>

		<div class="card">
			<p v-if="auth.user">
				User: {{ auth.userFullName }}
			</p>
			<Button v-if="!auth.user" @click="auth.login">
				Login
			</Button>
			<Button v-if="auth.user" @click="auth.logout">
				Logout
			</Button>
		</div>

		<p>
			Check out
			<a
				href="https://vuejs.org/guide/quick-start.html#local"
				target="_blank">
				create-vue
			</a>, the official Vue + Vite starter
		</p>
		<p>
			Install
			<a
				href="https://github.com/johnsoncodehk/volar"
				target="_blank">
				Volar
			</a>
			in your IDE for a better DX
		</p>
		<p class="read-the-docs">
			Click on the Vite and Vue logos to learn more
		</p>
	</div>
</template>

<style scoped>
button + button {
	margin-left: .5rem;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.read-the-docs {
	color: #888;
}
.wrapper {
  margin: 0 auto;
  text-align: center;
}
</style>
