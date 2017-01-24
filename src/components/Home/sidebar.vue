<template>
	<div class="col-sm-3 sidebar-box">
	  <div class="cover-img" :style="{ backgroundImage: 'url(' + indexImg + ')' }"></div>
	  <div class="bottom-block">
	    <h1>vue app</h1> 
	  </div>
	</div>
</template>
<script>
    export default {
        props: ['indexImg']
    }
</script>