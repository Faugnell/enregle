<template>
  <footer class="footer">
    <div class="container inner">
      <div>© {{ year }} EnRègle</div>

      <div class="links">
        <NuxtLink to="/blog">Blog</NuxtLink>
        <a href="#" @click.prevent="openModal('legal')">Mentions légales</a>
        <a href="#" @click.prevent="openModal('privacy')">Confidentialité</a>
        <a href="mailto:contact@obligationslegales.app">Contact</a>
      </div>
    </div>

    <!-- MODAL -->
    <div v-if="activeModal" class="modalOverlay" @click.self="activeModal = null">
      <div class="modal">
        <button class="close" @click="activeModal = null">×</button>

        <div v-if="activeModal === 'legal'">
          <h2>Mentions légales</h2>
          <p><strong>Éditeur :</strong> EnRègle</p>
          <p>Email : contact@obligationslegales.app</p>
          <p>
            Les informations fournies sur ce site sont à visée informative.
            Elles ne constituent pas un conseil juridique ou fiscal.
          </p>
          <p>Hébergement : OVHcloud, France.</p>
        </div>

        <div v-else>
          <h2>Politique de confidentialité</h2>
          <p>Nous collectons uniquement votre email pour la gestion de la liste d’attente.</p>
          <p>Base légale : consentement.</p>
          <p>
            Vous pouvez demander la suppression de vos données à :
            contact@obligationslegales.app
          </p>
          <p>Aucune revente de données. Hébergement en UE.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue"

const year = new Date().getFullYear()
const activeModal = ref<"legal" | "privacy" | null>(null)

function openModal(type: "legal" | "privacy") {
  activeModal.value = type
}
</script>

<style scoped>
.footer{
  border-top: 2px solid rgba(0,0,0,.92);
  padding: 22px 0;
  color: rgba(233,240,255,.75);
  background: rgba(30,47,209,.85);
  backdrop-filter: blur(10px);
  position: relative;
}

.container{
  max-width:1040px;
  margin:0 auto;
  padding:0 20px;
}

.inner{
  display:flex;
  justify-content:space-between;
  gap:14px;
  flex-wrap:wrap;
  align-items:center;
}

.links{
  display:flex;
  gap:16px;
  flex-wrap:wrap;
}

.links a{
  color: rgba(255,255,255,.9);
  text-decoration:none;
  font-weight:800;
  transition:.15s ease;
}

.links a:hover{
  color:#fff;
  text-decoration: underline;
  text-underline-offset:4px;
}

/* =========================
   MODAL OVERLAY
========================= */

.modalOverlay{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.65);
  backdrop-filter:blur(8px);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:1000;
}

/* =========================
   MODAL CONTAINER
========================= */

.modal{
  position:relative;

  max-width:560px;
  width:90%;

  padding:28px 24px 24px;

  border-radius:20px;

  background: rgba(17,24,39,.94);
  backdrop-filter: blur(14px);

  border: 2px solid rgba(0,0,0,.85);
  box-shadow: 12px 12px 0 rgba(0,0,0,.25);

  color: rgba(255,255,255,.92);
  line-height:1.65;
}

/* =========================
   MODAL TITLE (STICKER STYLE)
========================= */

.modal h2{
  margin: 0 0 16px;
  display: inline-block;

  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: .6px;

  font-size: 20px;
  line-height: 1.05;

  background: var(--paper-2);
  color: var(--ink);

  border: 2px solid rgba(0,0,0,.92);
  border-radius: 14px;

  padding: 10px 14px;

  box-shadow: var(--shadow-sm);

  transform: rotate(-1deg);
}

/* =========================
   MODAL TEXT
========================= */

.modal p{
  margin: 10px 0;
  color: rgba(255,255,255,.88);
}

.modal strong{
  color: #fff;
}

/* =========================
   CLOSE BUTTON
========================= */

.close{
  position:absolute;
  top:12px;
  right:14px;

  width:40px;
  height:40px;

  border-radius:14px;

  display:grid;
  place-items:center;

  background: rgba(255,255,255,.08);
  border: 2px solid rgba(255,255,255,.15);

  font-size:20px;
  color: rgba(255,255,255,.95);

  cursor:pointer;

  transition: transform .12s ease, background .15s ease;
}

.close:hover{
  transform: translate(-2px,-2px);
  background: rgba(255,255,255,.18);
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width:520px){
  .inner{
    flex-direction:column;
    align-items:flex-start;
  }

  .links{
    gap:10px;
  }

  .modal{
    padding:22px 18px;
  }
}
</style>
