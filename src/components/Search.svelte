<script>
    import { Search } from "$lib/search";
</script>

<div class='w-[18%] flex flex-col justify-between px-5 mt-4 gap-6'>

    <div class="flex space-x-2 rounded px-2 py-1 w-full bg-white border shadow-md">
     <img src='vector.svg' alt='1'/>
        <input
            class="w-full focus:ring-0 bg-transparent border-none outline-none placeholder:text-[#B6B6B6]"
            type="text"
            placeholder="Search here"/></div> 

<div class='flex flex-col gap-0.5 overflow-y-scroll'>
    {#each Search as data, index}
    <div class='bg-Box_grey hover:bg-[#424242] hover:text-white opacity-40 hover:opacity-60 text-center p-3 text-md font-medium'
    class:bg-[#424242] ={data == 'Books'}
    class:text-white={data == 'Books'}
    class:opacity-100 ={data == 'Books'}
    >
       {data}
    </div>
{/each}
</div>

<div class='sticky bottom-3 bg-[#F5F5F5] w-full'>
    <button class='bg-[#DFDFDF] w-full p-2 text-[#428BC1]'>+ Suggest Category</button>
    <p class='text-[#C4C4C4] text-center text-xs'>You can suggest a 
        <br/>category to us</p>
</div>

</div>
