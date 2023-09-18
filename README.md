# Intest: manual de uso de la página web

## ⬇️ Instalaciones necesarias

- nodeJS v18 o superior: https://nodejs.org/es
- git: https://git-scm.com/downloads
- Un editor de código, el recomendado es Visual Studio Code: https://code.visualstudio.com/
- Una terminal de comandos, se recomienda git bash (viene con la instalación de git)

## ⚙️ Configuraciones necesarias

Para poder correr el proyecto en tu maquina local es necesario clonar el repositorio desde GitHub, para tal fin es necesario configurar una llave ssh para poder establecer una conexión segura y correr los comandos necesarios vía terminal.

- Guía de como generar una llave ssh en windows: https://docs.github.com/es/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
- Guía de como de agregar una llave ssh a a Github: https://docs.github.com/es/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?platform=windows

Una vez configurado correctamente git y GitHub el siguiente paso es clonar el repositorio, para esto te invitamos a consultar la siguiente guía: https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository?tool=webui

## 🚀 Estructura del proyecto

Dentro de la carpeta del proyecto, verás las siguientes carpetas y archivos:

```
/
├── public/
├── src/
│   ├── constanst.ts
│   ├── components
│   ├── content
│   │   └── blog/
│   ├── js
│   ├── styles
│   └── pages/
│       ├── blog/
│       │    ├── [...slug].astro
│       │    └── index.astro
│       └── index.astro
└── package.json
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Command       | Action                                       |
| :------------ | :------------------------------------------- |
| `npm install` | Para instalar dependencias                   |
| `npm run dev` | Inicia el servidor local en `localhost:4321` |

## 📚 Como agregar post a la web
