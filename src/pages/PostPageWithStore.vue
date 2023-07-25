<template>
	<div>
		<h1>Page with posts</h1>
		<my-input
		v-focus
		:model-value="searchQuery"
		@update:model-value="setSearchQuery"
		placeholder="Search..."/>
		<div class="app__btns">
			<my-button class="custom_btn" @click="showDialog">Create Post</my-button>
			<my-select
			:model-value="selectedSort"
			@update:model-value="setSelectedSort"

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
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';


export default{
	components:{
    PostForm,
    PostList,
},
	data(){
		return{
			dialogVisible:false,
		}
	},
	methods:{
		...mapMutations({
			setPage:'post/setPage',
			setSearchQuery:'post/setSearchQuery',
			setSelectedSort:'post/setSelectedSort'
		}),
		...mapActions({
			loadMorePosts:'post/loadMorePosts',
			fetchPosts:'post/fetchPosts'
		}),


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
	},
	mounted(){
		this.fetchPosts();
		
	},
	computed:{
		...mapState({
			posts: state=>state.post.posts,
      	isPostLoading: state=>state.post.isPostLoading,
      	selectedSort: state=>state.post.selectedSort,
      	searchQuery: state=>state.post.searchQuery,
      	page: state=>state.post.page,
      	limit: state=>state.post.limit,
      	totalPages: state=>state.post.totalPages,
      	sortOptions: state=>state.post.sortOptions,
		}),
		...mapGetters({
			sortedPosts:'post/sortedPosts',
			sortedAndSearchedPosts:'post/sortedAndSearchedPosts'
		})
		
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