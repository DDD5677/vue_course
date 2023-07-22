<template>
	<div class="container">
		<h1>Page with posts</h1>

		<div class="app__btns">
			<my-button class="custom_btn" @click="showDialog">Create Post</my-button>
			<my-select
			v-model:value="selectedSort"
			:options="sortOptions"/>
		</div>

		<my-dialog v-model:show ="dialogVisible">
			<post-form
			@create="createPost"/>
		</my-dialog>

		<post-list 
		:posts="posts"
		@remove="removePost"
		v-if="!isPostLoading"/>

		<div v-else>Loading posts.....</div>
	</div>
</template>

<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
import axios from "axios";


export default{
	components:{
		PostForm,
		PostList
	},
	data(){
		return{
			posts:[],
			dialogVisible:false,
			isPostLoading: false,
			selectedSort:'',
			sortOptions:[
				{value:'title', name:'Among title'},
				{value:'body', name:'Among body'}

			]
		}
	},
	methods:{
		createPost(post){
			this.posts.push(post);
			this.dialogVisible=false
		},
		removePost(post){
			this.posts=this.posts.filter(p=>p.id!==post.id)
		},
		showDialog(){
			this.dialogVisible=true
		},
		async fetchPosts(){
			try{
				this.isPostLoading=true;
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
				this.posts = response.data;
			}catch(e){
				alert('Error')
			}finally{
				this.isPostLoading=false;

			}
		}

	},
	mounted(){
		this.fetchPosts();
	}
}
</script>


<style >
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
		padding: 20px 10px 0;
		margin: 0 auto;
	}
	.custom_btn{
		margin: 15px 0;
	}
	.app__btns{
		display: flex;
		justify-content: space-between;
	}
	
	
</style>