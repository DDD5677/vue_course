<template>
	<form @submit.prevent>
		<h4	h4 class="form_title">Creating new post</h4>
		<input 
		 	v-model="post.title"
		 	class="input" 
		 	type="text" 
		 	placeholder="Title">
		<input 
		 	v-model="post.body"
		 	class="input" 
		 	type="text" 
			placeholder="Description">
		<button class="btn" @click="createPost">Create</button>
	</form>
</template>
<script>
export default{
	data(){
		return{
			post:{
				title:'',
				body:''
			}
		}
	},
	methods:{
		createPost(){
			this.post.id = Date.now();
			this.$emit('create',this.post)
			this.post={
				title:'',
				body:''
			}
		}
		}
	}

</script>
<style scoped>
form{
		display: flex;
		flex-direction: column;
	}
	.form_title{
		margin-top: 15px;
		font-size: 20px;
	}
	.input{
		width: 100%;
		padding: 10px 15px;
		border: 2px solid teal;
		margin-top: 15px;
	}
	.btn{
		padding: 10px 15px;
		border: 2px solid teal;
		margin-top: 15px;
		align-self: flex-end;
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