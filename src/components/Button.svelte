<script>
    export let style = "primary"
    export let type = "button";
    export let disabled = "false"
</script>

<button {type} {disabled} class={style} > 
    <slot></slot>
</button>    

<style>
    button{
        cursor: pointer;
        color:#fff;
        width:100px;
        height: 35px;
        border-radius: 10px;
        font-size: 17px;
        letter-spacing: 0.07rem;
    }
    .primary{
        background:#202142;
        outline:none;
        border:none;
    }
    .secondary{
        background:#ff6a95;
    }
    button:disabled{
        background: #cccc;
        color:#333;
        cursor:auto;
    }
</style>
