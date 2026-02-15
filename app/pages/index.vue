<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";
onMounted(() => {
  useToast().add({ title: "Toast mounted", description: "OK", color: "success" });
});

const email = ref("");
const loading = ref(false);

const toast = useToast();

async function submit() {
  if (loading.value) return;

  loading.value = true;

  try {
    const res = await fetch("/api/waitlist.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value }),
    });

    if (res.ok) {
      toast.add({
        title: "Merci !",
        description: "Tu es sur la waitlist. On te prévient au lancement.",
        color: "success",
      });
      email.value = "";
      return;
    }

    let data: any = null;
    try {
      data = await res.json();
    } catch {
      // ignore
    }

    if (res.status === 409) {
      toast.add({
        title: "Déjà inscrit",
        description: "Cet email est déjà sur la liste d’attente.",
        color: "info",
      });
      return;
    }

    toast.add({
      title: "Oups…",
      description: data?.error ?? "Erreur, réessaie plus tard.",
      color: "warning",
    });
  } catch {
    toast.add({
      title: "Connexion impossible",
      description: "Vérifie ta connexion et réessaie.",
      color: "warning",
    });
  } finally {
    loading.value = false;
  }
}
</script>



<template>
  <main class="page">
    <!-- HERO -->
    <section class="hero">
      <div class="container hero__grid">
        <div>
          <h1>
            Toutes vos obligations légales.
            <span class="muted">Sans stress.</span>
          </h1>

          <p class="lead">
            EnRègle vous dit <strong>quoi faire</strong>, <strong>quand</strong>, et vous rappelle à temps
            pour rester en règle — sans tableur, sans jargon, sans panique.
          </p>

          <div class="cta">
            <a class="btn" href="#waitlist">Commencer (liste d’attente)</a>
            <a class="btn btn--ghost" href="#how">Voir comment ça marche</a>
          </div>

          <div class="trust">
            <span>🇫🇷 France</span>
            <span>🔐 Données UE</span>
            <span>⏱ 2 min</span>
            <span>💸 dès 9€/mois</span>
          </div>
        </div>

        <div class="card">
          <div class="card__title">Exemple</div>

          <div class="row">
            <div>
              <div class="row__t">Déclaration URSSAF</div>
              <div class="row__d">Rappel J-7 & J-1</div>
            </div>
            <span class="pill pill--warn">à faire</span>
          </div>

          <div class="row">
            <div>
              <div class="row__t">Assurance RC Pro</div>
              <div class="row__d">Renouvellement annuel</div>
            </div>
            <span class="pill">ok</span>
          </div>

          <div class="row">
            <div>
              <div class="row__t">TVA</div>
              <div class="row__d">Selon régime</div>
            </div>
            <span class="pill pill--danger">à vérifier</span>
          </div>

          <p class="card__note">Pas de comptabilité. Juste l’essentiel pour rester à jour.</p>
        </div>
      </div>
    </section>

    <!-- PROBLEM -->
    <section class="section">
      <div class="container">
        <h2>Le problème (très concret)</h2>
        <div class="grid">
          <div class="tile">“J’ai peur d’oublier une déclaration.”</div>
          <div class="tile">“Je ne sais pas si je suis à jour.”</div>
          <div class="tile">“Je garde les mails URSSAF au cas où…”</div>
          <div class="tile">“Mon comptable est trop cher pour ça.”</div>
        </div>
        <p class="note">Un oubli = pénalité, stress, perte de temps. EnRègle sert à éviter ça.</p>
      </div>
    </section>

    <!-- HOW -->
    <section id="how" class="section section--alt">
      <div class="container">
        <h2>Comment ça marche</h2>

        <div class="steps">
          <div class="step">
            <div class="step__n">1</div>
            <div>
              <div class="step__t">5 questions simples</div>
              <div class="step__d">Votre activité + votre régime. Rien de plus.</div>
            </div>
          </div>

          <div class="step">
            <div class="step__n">2</div>
            <div>
              <div class="step__t">Obligations personnalisées</div>
              <div class="step__d">Checklist claire + prochaines échéances.</div>
            </div>
          </div>

          <div class="step">
            <div class="step__n">3</div>
            <div>
              <div class="step__t">Rappels automatiques</div>
              <div class="step__d">Email + calendrier (Google / Outlook).</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICING -->
    <section class="section">
      <div class="container">
        <h2>Tarifs</h2>

        <div class="pricing">
          <div class="price">
            <div class="price__h">Gratuit</div>
            <div class="price__p">0 €</div>
            <ul>
              <li>Checklist personnalisée</li>
              <li>Statut “à faire / fait”</li>
              <li>Accès web</li>
            </ul>
          </div>

          <div class="price price--featured">
            <div class="price__h">Pro</div>
            <div class="price__p">9 € / mois</div>
            <ul>
              <li>Rappels email</li>
              <li>Sync calendrier</li>
              <li>Historique</li>
            </ul>
          </div>

          <div class="price">
            <div class="price__h">Pro+</div>
            <div class="price__p">19 € / mois</div>
            <ul>
              <li>Rappels multiples</li>
              <li>Pièces jointes</li>
              <li>Obligations “custom”</li>
            </ul>
          </div>
        </div>

        <p class="note">Annuel : 2 mois off.</p>
      </div>
    </section>

    <!-- WAITLIST -->
    <section id="waitlist" class="section section--alt">
      <div class="container">
        <h2>Rejoins la liste d’attente</h2>
        <p class="lead">On lance une première version très simple. Tu veux être prévenu ?</p>

        <form class="form" @submit.prevent="submit">
          <input v-model="email" type="email" placeholder="Ton email" autocomplete="email" required />
          <button class="btn" type="submit" :disabled="loading">
            {{ loading ? "Envoi..." : "Être notifié" }}
          </button>
        </form>

        <p class="micro">Zéro spam. 1 email au lancement. Désinscription en 1 clic.</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ---- Layout ---- */
.container{
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero{ padding: 54px 0 28px; }
.hero__grid{
  display: grid;
  grid-template-columns: 1.25fr .9fr;
  gap: 26px;
  align-items: start;
}

.cta{
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.trust{
  display:flex;
  gap: 12px;
  flex-wrap: wrap;
  color: rgba(255,255,255,.85);
  font-size: 13px;
}

/* ---- Problem grid ---- */
.section{ padding: 44px 0; }
.section--alt{
  background: linear-gradient(180deg, transparent, rgba(255,255,255,.04), transparent);
}

.grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.steps{ display: grid; gap: 12px; }

.step{
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 14px;
}

/* ---- Step badge ---- */
.step__n{
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-weight: 900;
  background: rgba(255,255,255,.18);
  border: 2px solid rgba(0,0,0,.25);
}

.step__t{ font-weight: 900; }

/* ---- Pricing ---- */
.pricing{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.price{ padding: 16px; }
.price__h{ font-weight: 900; }
.price__p{ font-size: 22px; margin: 8px 0 12px; }

/* ---- Form ---- */
.form{
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 16px;
}

input{
  flex: 1;
  min-width: 240px;
  padding: 12px 14px;
  border-radius: 14px;
  border: 2px solid rgba(255,255,255,.45);
  background: rgba(255,255,255,.10);
  color: rgba(255,255,255,.98);
  outline: none;
}

input:focus{
  border-color: rgba(255,255,255,.85);
}

.success{ color: #b7ffdb; margin-top: 12px; }
.error{ color: #ffb7b7; margin-top: 12px; }
.micro{ color: rgba(255,255,255,.85); font-size: 12px; margin-top: 10px; }

/* ---- Responsive ---- */
@media (max-width: 860px){
  .hero__grid{ grid-template-columns: 1fr; }
  .grid{ grid-template-columns: 1fr; }
  .pricing{ grid-template-columns: 1fr; }
}
</style>
