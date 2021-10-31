<script>
    import FeedBackform from './components/FeedBackform.svelte';
	import FeedBack from './components/FeedBack.svelte';
	import FeedBackStat from "./components/FeedBackStat.svelte";
</script>

<main> 
	<FeedBackform />
	<FeedBackStat />
	<FeedBack  />
</main>

<style>
	main{
		max-width: 900px;
		margin:0 auto;
		margin-top: 50px;
	}
</style>
