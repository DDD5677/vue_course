<template>
	<div class="navbar">
		<div @click="$router.push('/')" class="navbar__brand">Vue 3</div>
		<div class="navbar__btns">
			<my-button @click="$router.push('/posts')">Posts</my-button>
			<my-button @click="$router.push('/about')">About</my-button>
			<my-button @click="$router.push('/store')">Store</my-button>
			<my-button @click="$router.push('/composition')">Composition</my-button>

		</div>

	</div>
</template>

<script>
</script>

<style scoped>
.navbar{
	background-color: teal;
	box-shadow: 2px 2px 4px gray;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 10px;
}
.navbar__brand{
	font-size: 25px;
	color: #fff;
	font-weight: 700;
	cursor: pointer;
}
</style>