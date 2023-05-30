<script>
	import Nav from "../components/Nav.svelte";
    import Search from "../components/Search.svelte";
    import AddNovel from "../components/Add_novel.svelte";
    import Chat from '../components/Chat.svelte';
    import Waitlist from '../components/waitlist.svelte'
    // import ChatSpeech from "../components/Chat_speech.svelte";
</script>

<div class='flex flex-col h-screen'>
    <Nav/>
    <div class='flex h-full'>
        <Search/>
        <AddNovel/>
        <Chat />
        <Waitlist/>
    </div>
</div>


<!-- src/App.svelte -->

 
  
