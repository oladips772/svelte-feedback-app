<script>
  // import {onMount,onDestroy} from "svelte"
  import {feedbackStore} from "../stores";
  import FeedBackItem from "./FeedBackItem.svelte";
  import {scale,fade} from "svelte/transition"
  // let feedBack = [];

//  const unsubcribe =  feedbackStore.subscribe((data) => feedBack = data)

//   onDestroy(()=>{
//     unsubcribe()
//   })

</script>

<main>
  {#each $feedbackStore as fb (fb.id)}
  <div in:scale  out:fade>
    <FeedBackItem item={fb}/>
  </div>
  {/each}
</main>

<style>
    main{
        margin-top:20px;
    }
</style>