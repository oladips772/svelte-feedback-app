<script>
    import {createEventDispatcher} from "svelte";
    export let item;
    import Card from "./Card.svelte";
    const dispatch = createEventDispatcher();

    const handleDelete = (itemId) => {
        dispatch("delete",itemId)
    }
</script>

<main>
    <Card>
        <div class="num-display">
            <p>{item.rating}</p>
        </div>
        <button class="close" on:click={()=> handleDelete(item.id)}>X</button>
        <div class="item-text">
            <h6>{item.text}</h6>
        </div>
    </Card>
</main>

<style>
.num-display{
    background:#ff6a95;
    width:35px;
    height:35px;
    border-radius: 50%;
    top: -9px;
    left:-1px;
    border:1px solid #eee;
    align-items: center;
    text-align:center;
    position: absolute;
    display:flex;
    justify-content: center;
    cursor: pointer;
}
p{
    text-align: center;
    font-size: 20px;
    align-items: center;
    color:white;
    font-weight: bold;
}
.close{
    position:absolute;
    right:8px;
    top:3px;
    background:none;
    padding: 10px;
    border:none;
    cursor:pointer;
    font-size: 19px;
    height:30px;
    width:30px;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bolder;
    display:flex;
    border-radius: 50%;
}
.close:hover{
    background:#ccc;
}

</style>