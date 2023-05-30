<script>
 import Section from "./section.svelte";
</script>

<div class='p-5 flex flex-col gap-5'>   
    <div class='flex'>
    <img src='img.svg' alt="1"/>
    <div class='px-4'>
      <h1>To Kill a Mockingbird</h1>
      <p class='text-grey_2 text-xs'>by Harper Lee</p>
    </div>
</div>
<!-- section-2 -->
 <div class='text-grey_2 font-medium text-xsm'>
    <h1>Operated by Jhony</h1>
    <p>This bot is operated by Jhony Sam.</p>

    <img src='bird.svg' alt="bird" class='mt-3'/>
 </div>

 <!-- section-3 -->
 <div class=' flex justify-between border-b_grey border-y py-3'>
    <button class='bg-blue-700 text-white px-2 rounded-md text-xsm'>Claim ownership</button>
   <div>
      <button class='bg-icon px-2 py-1'><img src='./icon1.svg' alt="1"/></button>
      <button class='bg-icon px-2 py-1'><img src='./icon2.svg' alt="1"/></button>
      <button class='bg-icon px-2 py-1'><img src='./icon3.svg' alt="1"/></button>
   </div>
 </div>

 <!-- section-4 -->
 <div class='pt-5 pb-3 bg-white border-dashed border-[#6FBF6B] border rounded-lg flex flex-col justify-center items-center'>
   <button class="w-3/4 py-2 btn mx-auto bg-gradient-to-b from-[#BBFFF3FA] to-[#7DD66E] text-slate-600 font-bold rounded-t-lg rounded-b-3xl text-sm btn-shadow border-[0.5px] border-white">Join the Waitlist</button>
   <p class='text-grey_2 text-xs text-center'>Join our waiting list to be first <br/>
      to try Interacly</p>
 </div>

 <!-- section-5 -->
 <div>
   <h1 class='text-xsm text-[#6A6A6A] font-medium'>Embed on your site</h1>
   <img src='./snippet.svg' alt="1"/>
 </div>

 <!-- section-6 -->
 <div>
   <h1 class='font-bold text-xl'>Related</h1>

      <div class="space-y-3 overflow-y-scroll">
         {#each { length: 2 } as len}
            <Section />
         {/each}
      </div>
 </div>
</div>