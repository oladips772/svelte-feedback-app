<script>
   import Button from "./Button.svelte";
   import Rating from "./RatingSelect.svelte";  
   import {feedbackStore} from "../stores";


   let btnDisabled = true;
   let text = "";
   let min = 10;
   let rating = 8;
   let message = "";

   const handleRating = e =>  rating =  e.detail;

    const handleInput = (e) => {
        if(text.length < min){
            message = "review should be at least 10 characters"
            btnDisabled =  true;
        }else{
            message = ""
            btnDisabled = false;
        }
    }

    const handleSubmit = () => {
        if(text.length > min){
            const newFeedBack = {
                text,
                rating : +rating,
                id:Math.random()
            }
            text = ""
            feedbackStore.update((currentTarget)=>{
                return [newFeedBack,...currentTarget]
            })
        }
    }   

</script>
<form on:submit|preventDefault={handleSubmit}>
    <div class="rating-div">
        <Rating on:rating-Select={handleRating} />
    </div>
    <div class="input-group">
        <input 
        type="text" 
        placeholder="Drop a review on our services"
         bind:value={text}
         on:input={handleInput}
          />
        <Button type="submit" disabled={btnDisabled}>Drop</Button>
    </div>
</form>
<p>{message}</p>

<style>
    .rating-div{
        background:white;
        color:black;
    }
.input-group{
    background:white;
    padding:12px 20px;
    border-radius: 10px;
    justify-content:space-between;
    display:flex;
}
input{
    flex:1;
    outline: none;
    font-size:18px;
    border-radius: 10px;
    margin-right: 10px;
    border: none;
    font-weight: normal;
}
p{
    color:#ccc;
}
</style>