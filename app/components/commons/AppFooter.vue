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
  border-top:1px solid rgba(255,255,255,.08);
  padding:20px 0;
  color:rgba(233,240,255,.65);
  background:rgba(0,0,0,.15);
  position:relative;
}

.container{
  max-width:1040px;
  margin:0 auto; padding:0 20px;
}
.inner{
  display:flex;
  justify-content:space-between;
  gap:12px;
  flex-wrap:wrap;
}
.links{
  display:flex;
  gap:14px;
  flex-wrap:wrap;
}
a{
  color:inherit; 
  text-decoration:none; 
  cursor:pointer;
}
a:hover{
  color:rgba(234,240,255,1);
}

/* Modal */
.modalOverlay{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.6);
  backdrop-filter:blur(6px);
  display:flex; align-items:center;
  justify-content:center;
  z-index:1000;
}
.modal{
  background:#111827;
  max-width:520px;
  width:90%;
  padding:24px;
  border-radius:18px;
  border:1px solid rgba(255,255,255,.1);
  position:relative;
  color:rgba(255,255,255,.9);
  line-height:1.6;
}
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
.close{
  position:absolute;
  top:10px;
  right:14px;
  background:none;
  border:none;
  font-size:22px;
  color:white;
  cursor:pointer;
}
</style>
