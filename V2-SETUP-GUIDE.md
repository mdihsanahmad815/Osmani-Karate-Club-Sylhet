# Osmani Karate Club Sylhet — V2 setup

## Safe deployment
This is a separate V2 copy. Keep the current production Vercel project and repository unchanged while testing this build. Create a NEW GitHub repository (for example `Osmani-Karate-Club-Sylhet-V2`) and upload the contents of this ZIP.

## Vercel preview
1. Sign in to GitHub and create a new empty repository.
2. Upload all files and folders from this project root (not the outer ZIP folder).
3. In Vercel choose Add New → Project and import the new repository.
4. Framework preset: Other. Build command: leave empty. Output directory: `.`. Install command: leave empty.
5. Deploy and test the preview URL.

## PWA
The project includes `manifest.webmanifest`, `service-worker.js`, and 192/512 app icons. Installability requires HTTPS and a supported browser. On Android Chrome, open the deployed HTTPS website and use the browser's Install app / Add to Home screen option when offered. The in-page Install App control appears when the browser emits the install prompt.

## Existing backend
The current Supabase configuration and existing portal/admin/payment/gallery files were carried over. Test sign-in, sign-up, student/sensei/admin permissions, payment instructions, gallery and CMS features on the preview URL before replacing the old website. Do not publish any Supabase service-role/secret key in browser files. Keep Row Level Security enabled.

## Supabase URL configuration
Before changing production, add the new preview domain to Supabase Authentication → URL Configuration → Redirect URLs if the existing auth flow needs it. Keep the existing production URL until the new site is fully verified.

## Domain
The custom domain has not been purchased or connected by this ZIP. Once registered, add it in Vercel (or the selected host), configure the DNS records supplied by that host, then update canonical URLs, sitemap, Open Graph URLs and Supabase redirect URLs to the final domain.

## Notes
- The admission form no longer asks for Weight, Height or Belly Size.
- Pricing is intentionally shown as “Contact for current fees” rather than copying another branch's fee schedule.
- Social profiles: Facebook, Instagram, X, YouTube and TikTok.
- Footer credit links to Freelancer Ihsan.

All existing public portal/content pages have the shared Dark Navy + Gold palette override (`theme-v2.css`). The redesigned V2 homepage uses `v2.css`.
