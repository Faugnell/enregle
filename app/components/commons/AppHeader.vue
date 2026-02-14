<template>
  <header class="header">
    <div class="container inner">
      <div class="brand">
        <div class="logo" aria-hidden="true">✓</div>
        <div>
          <div class="name">EnRègle</div>
          <div class="sub">par obligationslegales.app</div>
        </div>
      </div>

      <nav class="nav">
        <a href="#how">Comment</a>
        <a href="#waitlist" class="btn">Être notifié</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header{
  position:sticky;top:0;z-index:10;
  backdrop-filter: blur(10px);
  background:rgba(11,13,16,.7);
  border-bottom:1px solid rgba(255,255,255,.08);
}
.container{max-width:1040px;margin:0 auto;padding:0 20px}
.inner{display:flex;align-items:center;justify-content:space-between;padding:14px 0}
.brand{display:flex;gap:12px;align-items:center}
.logo{
  width:38px;height:38px;border-radius:12px;
  display:grid;place-items:center;
  background:linear-gradient(135deg, rgba(130,170,255,.25), rgba(157,255,203,.12));
  border:1px solid rgba(255,255,255,.08);
}
.name{font-weight:800;color:rgba(234,240,255,1)}
.sub{font-size:12px;color:rgba(233,240,255,.6);margin-top:2px}
.nav{display:flex;gap:14px;align-items:center}
.nav a{color:rgba(233,240,255,.7);text-decoration:none}
.nav a:hover{color:rgba(234,240,255,1)}
.btn{
  display:inline-flex;align-items:center;justify-content:center;
  border-radius:14px;padding:10px 14px;
  background:rgba(130,170,255,.22);
  border:1px solid rgba(130,170,255,.35);
  color:rgba(234,240,255,1);
  font-weight:700;
}
</style>
