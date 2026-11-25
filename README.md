# Maison Antiquaire de Belgique — site institutionnel

Site statique (Next.js, export statique, TypeScript) pour une maison d’antiquaires et cabinet d’expertise d’art couvrant toute la Belgique : Bruxelles-Capitale, Wallonie et Flandre.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # génère le site statique dans ./out
```

## Formulaire Tally

Le composant réutilisable `components/TallyForm.tsx` affiche le formulaire dans un conteneur responsive (chargé à l’approche de l’écran, hauteur dynamique). Sans identifiant, il affiche un emplacement sobre.

1. Créer le formulaire sur https://tally.so et copier son identifiant (ex. `wMxAbC`).
2. Copier `.env.example` en `.env.local` et renseigner `NEXT_PUBLIC_TALLY_FORM_ID`.
3. Tous les boutons « Demander une expertise gratuite » mènent à `/contact/#demande`.

On peut aussi passer `url` ou `formId` directement : `<TallyForm formId="wMxAbC" />`.

## Structure

| Page | URL | Rôle SEO |
|---|---|---|
| Accueil | `/` | antiquaire Belgique, expertise, estimation, rachat |
| Expertise et estimation | `/expertise-estimation/` | expertise objet d’art, estimation gratuite |
| Rachat et succession | `/rachat-succession/` | rachat antiquités, estimation succession |
| Collections | `/collections/` | tableaux anciens, mobilier, argenterie, horlogerie, porcelaine |
| Bruxelles / Wallonie / Flandre | `/bruxelles/` `/wallonie/` `/flandre/` | antiquaire par région et par grande ville |
| La Maison | `/la-maison/` | confiance, méthode |
| Contact | `/contact/` | formulaire Tally |

SEO : un `<h1>` par page, `<title>` de 52 à 60 caractères, meta description de 144 à 155 caractères, données structurées Schema.org (`AntiqueStore`, `ProfessionalService`, `LocalBusiness`, `areaServed: BE`, `Service`, `FAQPage`, `BreadcrumbList`), `sitemap.xml`, `robots.txt`, canonicals, `lang="fr-BE"`.

## Photographies

Les photographies (`public/img`) proviennent de l’Art Institute of Chicago (domaine public, CC0). `python3 scripts/prepare-images.py` les télécharge, **détoure les objets** (rembg, modèle `isnet-general-use` : `pip install "rembg[cpu]" pillow`), exporte des variantes 600/900/1200 px (WebP transparent pour les objets, JPEG pour les tableaux) et écrit `lib/images.ts` (alt et title descriptifs). Le CSS pose les objets sur un fond de studio clair avec ombre portée. À remplacer par les photographies de la Maison dès qu’elles existent (même pipeline).

## À compléter avant la mise en ligne

- `NEXT_PUBLIC_SITE_URL` (domaine canonique) et `NEXT_PUBLIC_TALLY_FORM_ID`.
- Mentions légales : dénomination sociale, numéro BCE, TVA, coordonnées (`app/mentions-legales/page.tsx`).
- Adresse e-mail et téléphone réels (`lib/site.ts` ; aucune coordonnée n’est affichée pour l’instant).
- Vérifier avec le client les engagements affichés : estimation et déplacement gratuits, offre de rachat sans commission, paiement par virement.
