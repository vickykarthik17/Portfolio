# Portfolio Setup Notes

## Quick Setup Checklist

### 1. Resume PDF
- Add your resume PDF to `public/resume.pdf`
- The "Download Resume" button in the hero and nav will work automatically

### 2. Contact Form (Web3Forms)
- Go to https://web3forms.com and sign up (free)
- Get your access key
- In `src/components/Contact.jsx`, replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key
- Form will send emails directly to your inbox (no backend needed!)

### 3. Project GitHub Links
- In `src/components/FeaturedProjects.jsx`:
  - Update `githubUrl` for PetConnect and Documentor with actual repo URLs
- In `src/components/DataAnalysisProjects.jsx`:
  - Update `githubUrl` for Commonwealth Games Dashboard and Diwali Sales EDA with actual repo URLs
  - Add `demoUrl` if you have hosted dashboards/notebooks

### 4. Social Preview Image
- Create an image: 1200×630px (or use a screenshot of your hero section)
- Save as `public/og-image.png`
- This will show when you share your portfolio on LinkedIn/Twitter/Facebook

### 5. Favicon (Optional)
- Replace `public/vite.svg` with your own favicon
- Or update the link in `index.html` to point to your favicon

### 6. Deploy
- Build: `npm run build`
- Deploy to Vercel (or your hosting platform)
- Your portfolio is ready!

---

**Note:** All placeholder GitHub URLs currently point to your profile. Replace them with actual project repo URLs for better credibility.
