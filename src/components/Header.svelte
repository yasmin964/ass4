<!-- Header.svelte -->
<script lang="ts">
  import '../global.css';
  export let headerLinks: { href: string; icon: string }[];
  export let headerContent: { href: string; text: string }[];
</script>

<header class="header">
  <div class="s_text">
    {#each headerLinks as link}
      <a href={link.href}>
        <img src={link.icon} alt="" width="20" height="20" />
      </a>
    {/each}
  </div>
  <div class="header__content">
    
      {#each headerContent as link}
        <a href={link.href}>{link.text}</a>
      {/each}
    
  </div>
</header>

