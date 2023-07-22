<template>
<div class="dialog" v-if="show" @click="hideDialog">
	<div @click.stop class="dialog_content">
		<slot></slot>
	</div>
</div>
</template>

<script>
	export default{
		name:'my-dialog',
		props:{
			show:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			hideDialog(){
				this.$emit('update:show',false)
			}
		}
	}
</script>

<style scoped>
.dialog{
	
	top:0;
	bottom:0;
	left: 0;
	right: 0;
	position: fixed;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
}

.dialog_content{
	padding: 20px;
	background-color: #fff;
	border-radius: 12px;
	min-height: 60px;
	min-width: 400px;
}

</style>