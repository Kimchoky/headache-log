<script>

    import "../app.scss";


    let { children } = $props();

</script>

<svelte:head>
    <title>Headache Log</title>
</svelte:head>

<div>
    <header>
    </header>
    
    <main>
        {@render children()}
    </main>
    
    <footer>
    </footer>
</div>