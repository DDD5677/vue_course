<template>
	<div class="post">
		<div>
			<div><strong>Title:</strong> {{ post.title }}</div>
			<div><strong>Description:</strong> {{ post.body }}</div>
		</div>
		<div class="post__btns">
			<button class="btn">Delete</button>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		post:{
			type:Object,
			required:true
		}
	}
}
</script>

<style scoped>
.post{
		font-size: 18px;
		border: 2px solid teal;
		padding: 20px;
		margin-top: 15px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>