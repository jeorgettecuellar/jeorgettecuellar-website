 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
new file mode 100644
index 0000000000000000000000000000000000000000..c56874d983f654f6cd25e9f62e18556e13c04af1
--- /dev/null
+++ b/README.md
@@ -0,0 +1,28 @@
+# Jeorgette Cuellar Website
+
+This project is a Vite + React single-page site styled with Tailwind CSS.
+
+## Project layout
+- **Root**: contains `package.json`, `App.jsx`, `index.html`, and other config files.
+- **public/**: static assets such as images and `resume.pdf`.
+- **src files**: entry points (`main.jsx`, `index.css`, etc.) live at the repo root for this setup.
+
+## If you don’t write code, do this
+Follow these plain-language steps to make sure the two files are in the right place.
+
+### 1) Add the `.gitignore` file
+1. Open the project folder. It’s the one that has `package.json` in it.
+2. Create a new file named **`.gitignore`** (exactly that spelling, with the dot at the start).
+3. Open the file and paste in these four lines, then save:
+   ```
+   node_modules
+   dist
+   npm-debug.log*
+   .DS_Store
+   ```
+4. Keep this file in the same folder as `package.json`. That keeps the bulky build files out of version control.
+
+### 2) Make sure `README.md` is in the same folder
+1. In that same folder, create or open **`README.md`**.
+2. Copy the contents of this README (including these instructions) into the file and save.
+3. When you zip or upload the project, include this `README.md` so others know what’s inside.
 
EOF
)
