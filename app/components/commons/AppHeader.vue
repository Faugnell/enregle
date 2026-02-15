<script setup lang="ts">
const route = useRoute()
const onHome = computed(() => route.path === '/')
</script>

<template>
  <header class="header">
    <div class="container inner">
      <NuxtLink to="/" class="brand">
        <div class="logo" aria-hidden="true">✓</div>
        <div>
          <div class="name">EnRègle</div>
          <div class="sub">par obligationslegales.app</div>
        </div>
      </NuxtLink>

      <nav class="nav">
        <!-- Sur la home : ancres -->
        <template v-if="onHome">
          <a href="#how">Comment</a>
          <a href="/blog">Blog</a>
          <a href="#waitlist" class="btn">Être notifié</a>
        </template>

        <!-- Sur le blog : liens réels -->
        <template v-else>
          <NuxtLink to="/blog">Blog</NuxtLink>
          <NuxtLink to="/#waitlist" class="btn">Être notifié</NuxtLink>
        </template>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header{
  position: sticky;
  top: 0;
  z-index: 50;

  /* isolation pour gérer le ::before proprement */
  isolation: isolate;

  backdrop-filter: blur(12px);
  background: rgba(30,47,209,.72);
  border-bottom: 2px solid rgba(0,0,0,.92);
  box-shadow: 0 10px 30px rgba(0,0,0,.18);
}

/* halftone subtil */
.header::before{
  content:"";
  position:absolute;
  inset:0;
  pointer-events:none;
  opacity:.06;
  background-image: radial-gradient(rgba(0,0,0,.9) 1px, transparent 1.8px);
  background-size: 14px 14px;
  z-index:-1;
}

/* layout */
.container{
  max-width:1040px;
  margin:0 auto;
  padding:0 20px;
}

.inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:14px 0;
}

/* brand */
.brand{
  display:flex;
  gap:12px;
  align-items:center;
  text-decoration:none;
}

.logo{
  width:38px;
  height:38px;
  border-radius:12px;
  display:grid;
  place-items:center;

  background: var(--paper-2);
  color: var(--ink);

  border: 2px solid rgba(0,0,0,.92);
  box-shadow: var(--shadow-sm);

  font-weight:950;
  transform: rotate(-2deg);
}

.name{
  font-weight:950;
  letter-spacing:.6px;
  text-transform:uppercase;
  color:rgba(255,255,255,.98);
  text-shadow:2px 2px 0 rgba(0,0,0,.35);
}

.sub{
  font-size:12px;
  color:rgba(255,255,255,.82);
  margin-top:2px;
}

/* nav */
.nav{
  display:flex;
  gap:14px;
  align-items:center;
}

.nav a{
  color:rgba(255,255,255,.92);
  text-decoration:none;
  font-weight:850;
  transition:.15s ease;
}

.nav a:hover{
  color:#ffffff;
  text-decoration:underline;
  text-underline-offset:4px;
}

/* CTA button */
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border-radius:14px;
  padding:10px 14px;

  background: var(--paper-2);
  border: 2px solid rgba(0,0,0,.92);

  color:#000; /* texte noir */
  font-weight:950;

  box-shadow: var(--shadow-sm);
  transition: transform .12s ease, box-shadow .12s ease;
}

.btn:hover{
  transform: translate(-2px,-2px);
  box-shadow: 6px 6px 0 var(--accent);
  color:#000;
}

/* responsive */
@media (max-width:520px){
  .sub{ display:none; }
  .nav{ gap:10px; }
}
</style>
