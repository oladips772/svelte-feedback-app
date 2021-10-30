<script>
export let feedBack = [];
import FeedBackItem from "./FeedBackItem.svelte"

</script>

<main>
  {#each feedBack as fb (fb.id)}
    <FeedBackItem item={fb} on:delete/>
  {/each}
</main>

<style>
    main{
        margin-top:80px;
    }
</style>