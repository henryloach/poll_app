<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let items;
    export let activeItem;
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li class:active={item === activeItem} on:click={() => dispatch('tabChange', item)}>
                {item}
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        margin-bottom: 40px;

    }
    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li {
        margin: 0 16px;
        font-size: 18px;
        color: grey;
        cursor: pointer;
    }
    .active {
        color: maroon;
        border-bottom: 2px solid maroon;
        padding-bottom: 8px;
    }
</style>