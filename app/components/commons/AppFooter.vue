<template>
  <footer class="footer">
    <div class="container inner">
      <div>© {{ new Date().getFullYear() }} EnRègle</div>
      <div class="links">
        <a href="#" @click.prevent="todo('Mentions légales')">Mentions légales</a>
        <a href="#" @click.prevent="todo('Confidentialité')">Confidentialité</a>
        <a href="mailto:hello@obligationslegales.app">Contact</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
function todo(label: string) {
  alert(`À faire : ${label}`)
}
</script>

<style scoped>
.footer{border-top:1px solid rgba(255,255,255,.08);padding:20px 0;color:rgba(233,240,255,.65);background:rgba(0,0,0,.15)}
.container{max-width:1040px;margin:0 auto;padding:0 20px}
.inner{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}
.links{display:flex;gap:14px;flex-wrap:wrap}
a{color:inherit;text-decoration:none}
a:hover{color:rgba(234,240,255,1)}
</style>
