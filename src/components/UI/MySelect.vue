<template>
	<select 
	:value="value"
	@change="changeOption">
		<option disabled value="">Select one of them</option>
		<option 
		v-for="option in options" 
		:key="option.value" 
		:value="option.value"
		>{{ option.name }}</option>

	</select>
</template>

<script>
export default{
	name:'my-select',
	props:{
		value:{
			type:String
		},
		options:{
			type:Array,
			default:()=>[]
		}
	},
	methods:{
		changeOption(event){
			this.$emit('update:value',event.target.value)
		}
	}
}
</script>


<style scoped>

</style>