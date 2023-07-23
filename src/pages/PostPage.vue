<template>
	<div>
		<h1>Page with posts</h1>
		<my-input
		v-focus
		v-model="searchQuery"
		placeholder="Search..."/>
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
		:posts="sortedAndSearchedPosts"
		@remove="removePost"
		v-if="!isPostLoading"/>

		<div v-else>Loading posts.....</div>
		<div v-intersection="loadMorePosts" class="observer"></div>
		<!-- <div class="page__wrapper">
			<div 
			v-for="pageNum in totalPages" 
			:key="pageNum"
			class="page"
			:class="{
				'current-page':pageNum===page
			}"
			@click="changePages(pageNum)">
			{{ pageNum }}</div>
		</div> -->
	</div>
</template>

<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
import axios from "axios";


export default{
	components:{
    PostForm,
    PostList,
},
	data(){
		return{
			posts:[],
			dialogVisible:false,
			isPostLoading: false,
			selectedSort:'',
			searchQuery:'',
			page:1,
			limit:10,
			totalPages:0,
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
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
					params:{
						_page:this.page,
						_limit:this.limit
					}
				});
				this.totalPages = Math.ceil(response.headers['x-total-count']/this.limit)
				this.posts = response.data;
			}catch(e){
				alert('Error')
			}finally{
				this.isPostLoading=false;

			}
		},
		async loadMorePosts(){
			try{
				this.page+=1;
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
					params:{
						_page:this.page,
						_limit:this.limit
					}
				});
				this.totalPages = Math.ceil(response.headers['x-total-count']/this.limit)
				this.posts = [...this.posts, ...response.data];
			}catch(e){
				alert('Error')
			}
		},
		// changePages(pageNum){
		// 	this.page=pageNum;
		// }

	},
	mounted(){
		this.fetchPosts();
		
	},
	computed:{
		sortedPosts(){
			return [...this.posts].sort((post1,post2)=>post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
			)
		},
		sortedAndSearchedPosts(){
			return this.sortedPosts.filter(post=>post.title.includes(this.searchQuery))
		}
	},
	watch:{
		// page(){
		// 	this.fetchPosts()
		// }
	}

}
</script>


<style >
	.app__btns{
		display: flex;
		margin: 15px 0;
		justify-content: space-between;
	}
	.page__wrapper{
		display: flex;
		margin: 25px 0;
	}
	.page{
		cursor: pointer;
		padding:8px 10px;
		margin-right: 10px;
		border: 1px solid teal;
		border-radius: 3px;
		line-height: 1;
		transition: all 0.3s ease;
	}
	.page:hover,
	.current-page{
		background-color: rgb(78, 170, 170);
		color: #fff;
	}
	.observer{
		height: 20px;
		background-color: green;
	}
</style>