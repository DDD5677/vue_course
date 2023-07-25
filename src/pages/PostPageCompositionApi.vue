<template>
	<div>
		<h1>Page with posts</h1>
		<my-input
		v-focus
		v-model="searchQuery"
		placeholder="Search..."/>
		<div class="app__btns">
			<my-button class="custom_btn" >Create Post</my-button>
			<my-select
			v-model:value="selectedSort"
			:options="sortOptions"/>
		</div>

		<my-dialog v-model:show ="dialogVisible">
			<post-form/>
		</my-dialog>

		<post-list 
		:posts="sortedAndSearchedPosts"
		
		v-if="!isPostLoading"/>

		<div v-else>Loading posts.....</div>
	</div>
</template>

<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
import usePosts from "@/hooks/usePosts.js"
import useSortedPosts from "@/hooks/useSortedPosts.js"
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts.js"

export default{
	components:{
    PostForm,
    PostList,
	},
	data(){
		return{
			dialogVisible:false,
			sortOptions:[
				{value:'title', name:'Among title'},
				{value:'body', name:'Among body'}

			]
		}
	},
	setup(props){
		const {posts, totalPages, isPostLoading}=usePosts(10);
		const {sortedPosts, selectedSort}=useSortedPosts(posts);
		const {searchQuery,sortedAndSearchedPosts}=useSortedAndSearchedPosts(sortedPosts)


		return{
			posts,
			totalPages,
			isPostLoading,
			sortedPosts,
			selectedSort,
			searchQuery,
			sortedAndSearchedPosts
		}
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