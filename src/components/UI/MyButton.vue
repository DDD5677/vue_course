<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>
<script>
 export default{
	name:'my-button'
 }
</script>
<style scoped>
	.btn{
		padding: 10px 15px;
		border: 2px solid teal;
		border-radius: 5px;
		cursor: pointer;
		transition:all 0.3s ease-in-out;
		font-size: 18px;
		font-weight: 500;
		letter-spacing: 0.1em;
		line-height: 1em;
	}
	.btn:hover{
		background-color: rgb(78, 170, 170);
		color: #fff;
	}
</style>