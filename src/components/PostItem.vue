<template>
	<div class="post">
		<div>
			<div>{{ post.id }}</div>
			<div><strong>Title:</strong> {{ post.title }}</div>
			<div><strong>Description:</strong> {{ post.body }}</div>
		</div>
		<div class="post__btns">
			<my-button @click="$router.push(`/posts/${post.id}`)">Open</my-button>
			<my-button
			@click="$emit('remove',post)" 
			class="custom_btn">Delete</my-button>
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
	.post__btns{
		display: flex;
	}
	.custom_btn{
		margin-left: 10px;
		font-size: 16px;
		padding: 5px 10px;
		background-color: rgb(247, 168, 168);
	}
	.custom_btn:hover{
		background-color: rgb(137, 9, 9);
		border-color: rgb(137, 9, 9);
	}
</style>