<template>
	<form @submit.prevent>
		<h4	h4 class="form_title">Creating new post</h4>
		<my-input
			v-focus 
		 	v-model="post.title"
		 	placeholder="Title"/>
		<my-input 
		 	v-model="post.body"
			placeholder="Description"/>
		<my-button class="custom_btn" @click="createPost">Create</my-button>
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
	
	.custom_btn{
		align-self: flex-end;
		margin-top: 15px;
	}
</style>