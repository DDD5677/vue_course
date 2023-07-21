<template>
	<div class="container">
		<post-form 
		@create="createPost"/>
		<post-list 
		:posts="posts"/>
	</div>
</template>

<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"


export default{
	components:{
		PostForm,
		PostList
	},
	data(){
		return{
			posts:[
				{
					id:1,
					title:'Post about JavaScript',
					body:'JavaScript is one of teh best universal languages in the world!'
				},
				{
					id:2,
					title:'Post about Phyton',
					body:'Phyton is one of teh best universal languages in the world!'
				},
				{
					id:3,
					title:'Post about Java',
					body:'Java is one of teh best universal languages in the world!'
				},
			],
		}
	},
	methods:{
		createPost(post){
			this.posts.push(post);
		}
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
		padding: 0 10px;
		margin: 0 auto;
	}
	
	
</style>