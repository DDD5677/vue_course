<template>
	<navbar></navbar>
	<div class="container">
		
		<router-view></router-view>
	</div>
</template>

<script>
import Navbar from '@/components/UI/Navbar.vue';
export default{
	components:{
		Navbar
	}
}
</script>

<style>
	*{
		margin:0;
		padding: 0;
		box-sizing: border-box;
	}
	body{
		font-family: sans-serif;
	}
	.container{
		max-width: 1200px;
		padding: 40px 10px;
		margin: 0 auto;
	}

</style>