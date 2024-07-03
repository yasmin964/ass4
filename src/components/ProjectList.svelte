<script lang="ts">
  export let projects: { title: string, description: string }[];
</script>

<div class="ex">
  <h2 class="subtit">Some Examples of Website Projects</h2>
  <div class="examples">
    <div class="img">
      <div class="w1">
        <img src="../add/img/w1.png" alt="W1" width="250" height="220">
      </div>
      <div class="w2">
        <img src="../add/img/w2.png" alt="W2" width="290" height="220">
      </div>
    </div>
  </div>
</div>

<div class="subtitle2">
  <h2>My Background Projects</h2>
</div>
<div class="subpar2">
  <ul>
    {#each projects as project}
      <li>
        <p class="li_title">{project.title}</p>
        <p>{project.description}</p>
      </li>
    {/each}
    <li>
      These and many other works are presented in my GitHub, by clicking on the link you can get acquainted with them, I try to update it regularly.
    </li>
  </ul>
</div>

