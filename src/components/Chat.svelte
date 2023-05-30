<!-- src/Chat.svelte -->
<script>
    let messages = [
      { user: 'John', content: ' consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque', avatar: 'img.svg' },
      { user: 'You', content: 'what the main character of the book and type the story is', avatar: 'nav_img.svg' },
      { user: 'John', content: ' consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque', avatar: 'img.svg' }
 ];
  
    let newMessage = '';
  
    function sendMessage() {
      if (newMessage.trim() !== '') {
        messages = [
          ...messages,
          { user: 'You', content: newMessage, avatar: 'nav_img.svg' },
        ];
        newMessage = '';
        // Scroll to the latest message after sending
        setTimeout(() => {
          const chatContainer = document.getElementById('chat-container');
        }, 0);
      }
    }
  </script>
  
  <main class="flex flex-col justify-between p-4  rounded shadow">
    <ul id="chat-container" class="space-y-4">
      {#each messages as message, index}
        <li
          class="p-4 flex items-end"
          class:justify-end={message.user === 'You'}
          class:justify-start={message.user !== 'You'}
            >
          {#if message.user !== 'You'}
            <img class="w-8 h-8 rounded-full mr-4" src={message.avatar} alt={message.user} />    
            {/if}

          <div class="flex gap-2 w-1/2 justify-end items-end">
            
            <span class='p-4 rounded-t-xl'
            class:bg-Box_grey ={message.user !== 'You'}
            class:rounded-br-xl ={message.user !== 'You'}
            class:rounded-bl-xl ={message.user == 'You'}
            class:text-white ={message.user == 'You'}
            class:bg-blue-500 ={message.user == 'You'}>
            {message.content}</span>
            {#if message.user == 'You'}
            <img class="w-8 h-8 rounded-full mr-4" src={message.avatar} alt={message.user} />
          {/if}
          </div>
        </li>
      {/each}
    </ul>
  
    <form class="sticky bottom-4 mt-4 flex h-1/6" on:submit|preventDefault={sendMessage}>
      <div
      class="sticky w-full px-2 py-1 bg-white rounded-lg border-[#0068C9] border shadow-md shadow-interacly-blue-1/20 flex items-center">
      <textarea
        class="appearance-none bg-transparent border-none focus:ring-0 w-full resize-none h-full"
        placeholder="Type your message..." 
        bind:value={newMessage}/>
     <div class='flex flex-col gap-2'>
        <button
        class="hover:bg-blue-300 bg-icon text-white rounded-r py-2 px-4">
        <img src='mic.svg' alt='img1'/>
      </button>
      <button
        type="submit"
        class="hover:bg-blue-300 bg-icon text-white rounded-r py-2 px-4">
        <img src='send.svg' alt='img1'/>
      </button>
    </div>
    </form>
  </main>
  