<script>
    import { fade, slide, scale } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import PollStore from '../stores/PollStore.js';
    import PollDetails from './PollDetails.svelte';
</script>

<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
        <div in:fade out:scale|local animate:flip={{duration: 500}}>
            <PollDetails {poll}/>   
        </div>
    {:else}   
        <p>There are no polls to show.</p>
    {/each}
</div>

<style>
    .poll-list {
        display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 20px;
    }

    p {
        text-align: center;
        color: darkgrey;
    }
</style>