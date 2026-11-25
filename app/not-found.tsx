import Button from '@/components/Button';

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap" style={{ display: 'grid', gap: 'var(--s5)', justifyItems: 'start' }}>
        <p className="kicker">Erreur 404</p>
        <h1>Cette page est introuvable</h1>
        <p className="lede">La page demandée n’existe pas ou a été déplacée.</p>
        <Button href="/">Retour à l’accueil</Button>
      </div>
    </section>
  );
}
