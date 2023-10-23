# DUST-Project Next.Js New Website 

# Ubuntu installation instruction 

```bash
sudo apt-get update && sudo apt-get install -y ca-certificates curl gnupg
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
NODE_MAJOR=20
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt-get update && sudo apt-get install nodejs -y
```

Check the installation of nodejs and npm by doing 
```bash
node -v
npm -v
```
Enable tailwindcss
```bash
sudo npm install -D tailwindcss postcss autoprefixer
sudo npm install next --save
```
Clone the repository and inside the folder do: 
```bash
npx tailwind init -p
```
Build the website with:
```
npm run dev
```
Open a browser tab. Usually the link is http://localhost:3000  

 

[Nextjs Portfolio Website](https://devdreaming.com//videos/nextjs-tutorial-build-portfolio-tailwind-css-framer-motion#code-links) <br />

If you want to learn how to create it please follow below tutorial👇: <br />
https://youtu.be/Yw7yWHigGKI <br />
[![YouTube Video Views](https://img.shields.io/youtube/views/Yw7yWHigGKI?style=social)](https://youtu.be/Yw7yWHigGKI)<br />

### Resources Used in This Project

- Profile image in the about page by [Albert Dera](https://unsplash.com/@albertdera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) 
on [Unsplash](https://unsplash.com/photos/ILip77SbmOE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).
- Fonts from https://fonts.google.com/ <br />
- Icons from https://iconify.design/ <br />
- LightBulb Svg from https://lukaszadam.com/illustrations <br />

### External Libraries used in this project:

- [framer-motion](https://www.framer.com/motion/) <br />
- [Tailwind css](https://tailwindcss.com/) <br />
