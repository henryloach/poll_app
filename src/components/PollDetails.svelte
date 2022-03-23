<script>
    import PollStore from '../stores/PollStore.js';
	import { tweened } from 'svelte/motion';

    import Card from '../shared/Card.svelte';
    import Button from '../shared/Button.svelte';

    export let poll;

    $: totalVotes = poll.votesA + poll.votesB;

    $: aShare = Math.floor(100 * poll.votesA / totalVotes) || 0;
    $: bShare = Math.floor(100 * poll.votesB / totalVotes) || 0;

    const tweenedA = tweened(0, {duration: 250});
    const tweenedB = tweened(0, {duration: 250});

    $: tweenedA.set(aShare);
    $: tweenedB.set(bShare);

    const handleVote = (option, id) => {

        PollStore.update(currentPolls => {
            let copiedPolls = [...currentPolls];
		    let upvotedPoll = copiedPolls.find((poll) => poll.id == id);

		    if(option === 'a') {
		    	upvotedPoll.votesA++;
		    }

            if(option === 'b') {
                upvotedPoll.votesB++;
            }

            return copiedPolls;
        });
    };

    const handleDelte = (id) => {
        PollStore.update(currentPolls => {
            return currentPolls.filter(poll => poll.id != id)
        });
    }
    </script>

<Card>
    <div class="poll">
        <h3>{ poll.question } </h3>
        <p>Total votes: { totalVotes } </p> 
        <div class="answer" on:click={() => handleVote('a', poll.id)}>
            <div class="percent percent-a" style="width: {$tweenedA}%"></div>
            <span>{poll.answerA} ({poll.votesA})</span>
        </div>
        <div class="answer" on:click={() => handleVote('b', poll.id)}>
            <div class="percent percent-b" style="width: {$tweenedB}%"></div>
            <span>{poll.answerB} ({poll.votesB})</span>
        </div>
    </div>
    <div class="delete">
        <Button flat={true} inverse={false} on:click={() => handleDelte(poll.id)}>Delete</Button>
    </div>  
</Card>

<style>
h3 {
    margin: 0 auto;
    color: #555;
}

p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
}

.answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
}

.answer:hover {
    opacity: 0.6;
}

span {
    display: inline-block;
    padding: 10px 20px;
}

.percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
}

.percent-a {
    border-left: 4px solid maroon;
    background: rgba(216,27,66,0.2);
}

.percent-b {
    border-left: 4px solid steelblue;
    background: rgba(69,196,150,0.2);
}

.delete {
    margin-top: 30px;
    text-align: center;
}


</style>