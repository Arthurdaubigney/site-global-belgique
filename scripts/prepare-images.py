#!/usr/bin/env python3
"""Télécharge les photographies (Art Institute of Chicago, domaine public / CC0, API ouverte)
et génère public/img/<nom>-600.jpg + -1200.jpg ainsi que lib/images.ts.
Les objets (non les tableaux) sont détourés avec rembg (pip install "rembg[cpu]")
et exportés en WebP transparent, posés ensuite sur un fond clair par le CSS.
Usage : python3 scripts/prepare-images.py
"""
import json, os, urllib.request
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "img")
os.makedirs(OUT, exist_ok=True)
UA = {"User-Agent": "maison-antiquaire-site/1.0"}

# nom -> (id AIC, alt, title)
# Points focaux (object-position) quand le cadre recadre l'image
FOCUS = {"tableaux": "50% 45%"}

# Photographies détourées (objets) ; les autres restent des tableaux rectangulaires.
CUT = {"hero", "mobilier", "argenterie", "horlogerie", "porcelaine", "cabinet", "horloge", "candelabres", "secretaire", "vase", "tasse"}

IMAGES = {
    "hero": (156442, "Coffre de style Boulle en écaille et marqueterie de laiton, bronzes dorés, XVIIIe siècle", "Coffre Boulle aux bronzes dorés : un objet d’art typique de nos expertises"),
    "tableaux": (62042, "Nature morte flamande du XVIIe siècle aux gibiers, fruits et légumes", "Tableau flamand ancien : nature morte du XVIIe siècle"),
    "mobilier": (109412, "Commode française en marqueterie, plateau de marbre et bronzes dorés, fin du XVIIIe siècle", "Mobilier ancien : commode d’époque Louis XVI en marqueterie"),
    "argenterie": (100726, "Service à thé et à café en argent massif avec bouilloire sur réchaud", "Argenterie ancienne : service à thé et à café en argent"),
    "horlogerie": (57819, "Cartel d’applique en bronze doré de style rocaille, mouvement à cadran émaillé", "Horlogerie ancienne : cartel en bronze doré"),
    "porcelaine": (108575, "Vase à tête d’éléphant en porcelaine de Sèvres, décor polychrome et dorures", "Porcelaine ancienne : vase de Sèvres à tête d’éléphant"),
    "cabinet": (34116, "Cabinet d’ébène et d’ivoire, Augsbourg, vers 1640, à nombreux tiroirs et niche centrale", "Cabinet de collection en ébène et ivoire du XVIIe siècle"),
    "horloge": (121363, "Horloge de parquet à caisse en acajou et cadran de laiton, XVIIIe siècle", "Horloge de parquet ancienne en acajou"),
    "nature-morte": (21682, "Nature morte hollandaise : table dressée, pichet d’étain, pain et citron pelé", "Tableau ancien : nature morte au citron"),
    "fleurs": (66042, "Trompe-l’œil : guirlande de fleurs devant un rideau de soie bleue, XVIIe siècle", "Tableau ancien : guirlande de fleurs en trompe-l’œil"),
    "portrait": (111078, "Portrait d’homme à la fraise, peinture flamande, vers 1575", "Portrait flamand du XVIe siècle"),
    "tasse": (24779, "Tasse et soucoupe de Sèvres au fond bleu céleste et putti en médaillon", "Porcelaine de Sèvres : tasse et soucoupe du XVIIIe siècle"),
    "candelabres": (73139, "Paire de candélabres en bronze patiné, aigles et chaînettes, vers 1880", "Paire de candélabres en bronze patiné"),
    "secretaire": (121777, "Cabinet sur piètement en acajou, XVIIIe siècle, galerie de laiton ajourée", "Cabinet sur piètement du XVIIIe siècle"),
    "vase": (10896, "Vase à oreilles en porcelaine, fond bleu de four et réserve peinte", "Vase en porcelaine ancienne à fond bleu"),
}

api = json.load(urllib.request.urlopen(urllib.request.Request(
    "https://api.artic.edu/api/v1/artworks?ids=" + ",".join(str(v[0]) for v in IMAGES.values())
    + "&fields=id,image_id,is_public_domain&limit=100", headers=UA), timeout=60))
img_ids = {a["id"]: a["image_id"] for a in api["data"] if a.get("is_public_domain")}

CACHE = os.path.join(ROOT, "scripts", ".cache")
os.makedirs(CACHE, exist_ok=True)
session = None
dims, widths = {}, {}
for name, (aid, alt, title) in IMAGES.items():
    src = os.path.join(CACHE, f"{name}.jpg")
    if not os.path.exists(src):
        url = f"https://www.artic.edu/iiif/2/{img_ids[aid]}/full/1200,/0/default.jpg"
        raw = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=90).read()
        open(src + ".tmp", "wb").write(raw)
        Image.open(src + ".tmp").convert("RGB").save(src, quality=95)
        os.remove(src + ".tmp")
    im = Image.open(src).convert("RGB")
    if name in CUT:
        from rembg import remove, new_session
        session = session or new_session("isnet-general-use")
        cut = remove(im, session=session)
        box = cut.getchannel("A").point(lambda v: 255 if v > 12 else 0).getbbox()
        pad = int(max(cut.size) * 0.01)
        box = (max(0, box[0] - pad), max(0, box[1] - pad), min(cut.width, box[2] + pad), min(cut.height, box[3] + pad))
        im = cut.crop(box)
        ext = "webp"
    else:
        ext = "jpg"
    dims[name] = im.size
    ws = sorted({w for w in (600, 900) if w < im.width} | {im.width})
    widths[name] = ws
    for w in ws:
        s2 = im.copy()
        if w != im.width:
            s2 = s2.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        path = os.path.join(OUT, f"{name}-{w}.{ext}")
        if ext == "webp":
            s2.save(path, "WEBP", quality=90, method=6)
        else:
            s2.save(path, quality=82, optimize=True, progressive=True)
    print(name, im.size, ext, ws)

with open(os.path.join(ROOT, "lib", "images.ts"), "w") as f:
    f.write("// Fichier généré par scripts/prepare-images.py — ne pas éditer à la main.\n")
    f.write("import type { Img } from './site';\n\nexport const IMG = {\n")
    for name, (aid, alt, title) in IMAGES.items():
        w, h = dims[name]
        key = name.replace("-", "_")
        pos = f", pos: {json.dumps(FOCUS[name])}" if name in FOCUS else ""
        extra = f", ws: {json.dumps(widths[name])}" + (", cut: true" if name in CUT else "")
        f.write(f"  {key}: {{ file: {json.dumps(name)}, w: {w}, h: {h}, alt: {json.dumps(alt, ensure_ascii=False)}, title: {json.dumps(title, ensure_ascii=False)}{pos}{extra} }},\n")
    f.write("} satisfies Record<string, Img>;\n")
