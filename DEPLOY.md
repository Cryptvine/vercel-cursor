# Deploy Cryptvine to Vercel and link cryptvine.dev

Follow these steps to get the site live on your domain.

## 0. Connect this folder to your GitHub repo (same one Vercel uses)

Install Git if needed, then run the connect script with your repo URL:

```bash
sudo apt install git   # if you don’t have git yet
cd /home/hypno/cryptvine.dev
./connect-repo.sh https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

Use the **exact** GitHub repo URL that Vercel is connected to (e.g. from Vercel project → Settings → Git). After this, `git push` from here will trigger Vercel deploys.

**If you prefer to do it by hand:**

```bash
cd /home/hypno/cryptvine.dev
git init
git add .
git commit -m "Initial commit: Next.js site for cryptvine.dev"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## 1. If you don’t have a GitHub repo yet

1. Create a new repo on GitHub: https://github.com/new  
   Name it e.g. **cryptvine-dev**. Do **not** add a README, .gitignore, or license.
2. Run the connect script above with the new repo’s URL.

## 2. Import the project on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub is easiest).
2. Click **Add New…** → **Project**.
3. **Import** the GitHub repo you just pushed (e.g. `cryptvine-dev`).
4. Leave the defaults (Framework: Next.js, Root: `.`, Build: `npm run build`).
5. Click **Deploy**. Wait for the first deployment to finish.

You’ll get a URL like `your-project.vercel.app`.

## 3. Add your domain (cryptvine.dev) in Vercel

1. In the Vercel dashboard, open your project.
2. Go to **Settings** → **Domains**.
3. Enter **cryptvine.dev** and **www.cryptvine.dev** (if you want www).
4. Click **Add**. Vercel will show the DNS records you need.

## 4. Point the domain at Vercel (at your registrar)

Where you bought cryptvine.dev (e.g. Namecheap, Cloudflare, Google Domains, etc.):

- **For apex (cryptvine.dev):**  
  Add an **A** record:  
  - Name: `@` (or leave blank for “root”)  
  - Value: **76.76.21.21** (Vercel’s IP; confirm in Vercel’s Domains UI if they show a different one)

- **For www:**  
  Add a **CNAME** record:  
  - Name: `www`  
  - Value: **cname.vercel-dns.com**

If your registrar supports **ANAME/ALIAS** for the root, you can use that and point `@` to **cname.vercel-dns.com** instead of the A record (Vercel’s Domains page will show the exact recommendation).

## 5. SSL and “in use”

- Vercel will issue SSL (HTTPS) automatically once DNS is correct.
- In **Settings → Domains**, each domain will show **Valid Configuration** when it’s linked correctly. If it says “in use” elsewhere, remove the domain from any other host (e.g. old Vercel project or another provider) and try again.

## 6. Future updates

After the repo is connected to Vercel:

- Push to `main` (or your production branch) → Vercel runs a new build and deploys.
- No need to redeploy manually unless you use a different branch for production.

---

**Quick checklist**

- [ ] Repo pushed to GitHub  
- [ ] Project imported and deployed on Vercel  
- [ ] Domain **cryptvine.dev** (and optionally **www.cryptvine.dev**) added in Vercel  
- [ ] A and CNAME (or ANAME) set at your domain registrar  
- [ ] Domains show “Valid Configuration” and HTTPS works
