<script>
	import FeedBack from './components/FeedBack.svelte';

	let feedBack = [
		{
			id:1,
			rating:8,
			text:"nice job",
		},
		{
			id:2,
			rating:12,
			text:"nice jobs",
		}
	]

	const Delete = (e) => {
		const itemId = e.detail;
		feedBack = feedBack.filter((item) => item.id !== itemId)
	}

</script>

<main> 
	<FeedBack {feedBack} on:delete={Delete}/>
</main>

<style>

</style>
