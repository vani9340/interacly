<script>
 import Section from "./section.svelte";
</script>

<div  class='bg-white w-1/6 p-4 flex flex-col justify-between border-t'>
    <div class="space-y-3  overflow-y-scroll">
		{#each { length: 7 } as len}
			<Section />
		{/each}
	</div>
<div class='sticky bottom-4 bg-white'>
    <button class='bg-grey_3 text-blue-500 w-full p-2 rounded-lg'>
        + Add yours
    </button>
    <p class='text-grey_4 text-xsm text-center'>You can add your own book
        or website using this feature.</p>
</div>

</div>