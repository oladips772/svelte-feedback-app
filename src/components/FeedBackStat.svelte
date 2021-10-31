<script>
import {feedbackStore} from "../stores"

    $: count = $feedbackStore.length;
	$: average = $feedbackStore.reduce((a,{rating}) => a + rating, 0) / $feedbackStore.length;

</script>

<main>
    <div class="feed-back-stat">
        <h4> Reviews : {count}</h4>
        <h4> Average : {average}</h4>
    </div>
</main>

<style>
    .feed-back-stat{
        display:flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
    }
</style>