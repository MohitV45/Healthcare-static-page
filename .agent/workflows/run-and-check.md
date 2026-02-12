---
description: How to run and check the application
---

### 1. Start Development Server

Run the following command to start the site with network access (for mobile testing):

```powershell
npm run dev -- --host
```

### 2. Access the Site

- **Local**: Open [http://localhost:5173](http://localhost:5173)
- **Mobile**: Check the terminal output for the **Network** IP address and open it on your phone.

### 3. Quality Checks

// turbo

- **Linting**: Run `npm run lint` to check for code style and errors.
- **Type Check**: Run `npm run typecheck` (if configured) to verify TypeScript types.

### 4. Production Preview

Run these to verify the site is ready for deployment:

```powershell
npm run build
npx vite preview
```
