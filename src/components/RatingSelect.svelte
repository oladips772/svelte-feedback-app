<script>
   export let selected = 8;
    import {createEventDispatcher} from "svelte";
    const dispatch =  createEventDispatcher();

    const onChange = (e) => {
        selected = e.currentTarget.value;
        dispatch("rating-Select",selected)
    }

</script>

<main>
    <ul class="rating">
        <li>
            <input type="radio" id="num1" name="rating" value="1" on:change={onChange} checked={selected === 1}>
            <label for="num1">1</label>
        </li>
         <li>
            <input type="radio" id="num2" name="rating" value="2" on:change={onChange} checked={selected  === 2}>
            <label for="num2">2</label>
        </li>
         <li>
            <input type="radio" id="num3" name="rating" value="3" on:change={onChange} checked={selected  === 3}>
            <label for="num3">3</label>
        </li>
        <li>
            <input type="radio" id="num4" name="rating" value="4" on:change={onChange} checked={selected  === 4}>
            <label for="num4">4</label>
        </li> 
        <li>
            <input type="radio" id="num5" name="rating" value="5" on:change={onChange} checked={selected  === 5}>
            <label for="num5">5</label>
        </li>
        <li>
            <input type="radio" id="num6" name="rating" value="6" on:change={onChange} checked={selected  === 6}>
            <label for="num6">6</label>
        </li>
         <li>
            <input type="radio" id="num7" name="rating" value="7" on:change={onChange} checked={selected  === 7}>
            <label for="num7">7</label>
        </li>
         <li>
            <input type="radio" id="num8" name="rating" value="8" on:change={onChange} checked={selected  === 8}>
            <label for="num8">8</label>
        </li>
    </ul>
</main>

<style>
    .rating{
        display:flex;
        margin-bottom:90px;
        padding:10px;
        display:flex;
        align-items: center;
        justify-content:space-between;
        margin-bottom: 5px;
    }
    label{
        cursor: pointer;
    }
    li label{
        list-style: none;
        position: relative;
        width:35px;
        height:35px;
        cursor: pointer;
        padding:8px;
        border-radius: 50%;
        display:flex;
        justify-content:center;
        text-align: center;
    }
    li{
        list-style: none;
    }
    li:hover{
        background:#ff6a95 ;
        border-radius: 50%;

    }
    [type = "radio"]{
        display:none;
    }
    [type = "radio"]:checked ~ label{
        background:#ff6a95 ;
        color:white;
        width:35px;
        height:35px;
        cursor: pointer;
        border-radius: 50%;
        justify-content:center;
        text-align: center;
        display:flex;

    }


</style>