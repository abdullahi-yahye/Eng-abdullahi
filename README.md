# Abdullaahi Yahye Ali — Portfolio

Professional portfolio site for **Abdullaahi Yahye Ali** — IT Support · System Administration · Web Design · Digital Marketing. Static HTML/CSS/JS, ready to deploy free on **GitHub Pages**.

## Structure

```
portfolio/
├── index.html        # all sections: Home, About, Portfolio, Certifications, Testimonials, Contact
├── css/style.css      # design system + layout
├── js/script.js       # mobile nav + footer year
└── assets/            # put your photo + CV PDF here
```

## Waxa horey loo geliyay (already added for you)

- ✅ Sawirkaaga professional-ka ah (studio suit photo) → `assets/photo.jpg`, wuxuu ka muuqdaa qaybta About.
- ✅ CV-gaaga PDF-ka ah → `assets/Abdullaahi-Yahye-CV.pdf` (button-ka "Download CV" ayaa u linkeeyay).
- ✅ 23 shahaadadood oo dhab ah (Cisco, Google, IBM, Meta, AHI, Nile University, DEDAAL, SSI, MindLuster) — waxay ku jiraan `assets/certificates/` oo lagu daawan karo qaybta Certifications ("Certificate gallery").

**Note:** Shahaadada dugsiga sare (SAFE Secondary School Certificate) lama darin gallery-ga, sababtoo ah waxay muujineysaa magaca hooyadaa iyo lambarka roll-ka — xog aan habboonayn in la daayo bog dadweyne ah.

## Haddii aad rabto inaad wax ku darto

1. Haddii aad rabto GitHub link oo dhab ah, beddel `[Your GitHub Link]` ee gudaha `index.html`.
2. Haddii aad rabto inaad ku darto CV-gaaga oo la beddelay (nooc cusub), ku beddel isla faylka `assets/Abdullaahi-Yahye-CV.pdf`.

## Sida loo deploy-gareeyo GitHub Pages (bilaash)

1. Samee repository cusub oo GitHub ah, tusaale `abdullaahi-portfolio`.
2. Soo geli faylashan (index.html, css/, js/, assets/) repo-ga.
3. Aad u **Settings → Pages**.
4. Ka hoos **Branch**, dooro `main` iyo `/ (root)`, kadibna riix **Save**.
5. Dhowr daqiiqo ka dib, boggaagu wuxuu ka shaqayn doonaa:
   `https://<username>.github.io/abdullaahi-portfolio/`

Haddii aad haysato domain-ka `abdalletech.com`, ku dar file `CNAME` (mid aan qoraal ahayn oo ka kooban hal line: `abdalletech.com`) guriga repo-ga, kadibna DNS-kaaga ku dar CNAME record oo u tilmaamaysa `<username>.github.io`.

## Local preview

Furoo `index.html` browser-kaaga si toos ah, ama isticmaal server yar sida:

```
python3 -m http.server 8000
```

kadibna tag `http://localhost:8000`.
