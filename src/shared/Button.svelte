<script>
    export let type = 'primary';
    export let flat = true;
    export let inverse = true;
</script>

<button class={type} class:flat={flat} class:inverse={inverse} on:click>
    <slot></slot>
</button>

<style>
    button {
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px grey;
        opacity: 0.5;
    }

    button:hover {
        opacity: 1;
    }

    .primary {
        background: maroon;
        color: white;
    }

    .primary.inverse {
        background: white;
        color: maroon;
        border: 2px solid maroon;
        
    }

    .secondary {
        background: steelblue;
        color: black;
    }

    .secondary.inverse {
        background: white;
        color: steelblue;
        border: 2px solid steelblue;
    }

    .flat {
        box-shadow: none;
    }
</style>