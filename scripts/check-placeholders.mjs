// Avertit avant publication si des coordonnées ou le formulaire Tally ne sont pas renseignés.
const missing = [];
if (!process.env.NEXT_PUBLIC_PHONE) missing.push('NEXT_PUBLIC_PHONE (numéro belge +32…)');
if (!process.env.NEXT_PUBLIC_EMAIL) missing.push('NEXT_PUBLIC_EMAIL');
if (!process.env.NEXT_PUBLIC_TALLY_URL && !process.env.NEXT_PUBLIC_TALLY_FORM_ID) missing.push('NEXT_PUBLIC_TALLY_URL (lien du formulaire Tally)');
if (!process.env.NEXT_PUBLIC_SITE_URL) missing.push('NEXT_PUBLIC_SITE_URL (domaine définitif)');
if (missing.length) console.warn('\n⚠ À renseigner avant diffusion :\n  - ' + missing.join('\n  - ') + '\n');
