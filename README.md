# Blog API Integration Template

Una plantilla moderna y lista para usar que demuestra la integración de APIs de blogs (Blogger y WordPress) en sitios web estáticos. Este proyecto sirve como punto de partida para crear sitios web que consuman contenido de Blogger o WordPress a través de sus APIs REST.

## 🌟 Características

### Generales
- Diseño moderno y responsive
- Componentes web reutilizables (header y footer)
- URLs amigables para SEO
- Paginación dinámica
- Extractos automáticos de contenido
- Visualización optimizada de imágenes
- Soporte para código y contenido multimedia
- Interfaz intuitiva y limpia

### Implementación Blogger
- Integración completa con la API v3 de Blogger
- Visualización de posts con imágenes
- Navegación entre posts
- Manejo de fechas en formato local
- Extracción automática de imágenes del contenido

### Implementación WordPress
- Integración con WordPress REST API
- Sistema de categorías dinámico
- Filtrado de posts por categoría
- Soporte para imágenes destacadas
- Visualización de metadatos del post
- Manejo de contenido multimedia embebido

## 🚀 Tecnologías Utilizadas

- HTML5
- CSS3 con diseño responsive
- JavaScript moderno (ES6+)
- Web Components
- APIs REST
- Google Fonts
- Sin dependencias externas

## 📁 Estructura del Proyecto

```
├── index.html              # Página principal
├── blog.html              # Vista de blog (Blogger)
├── post.html              # Vista de post individual (Blogger)
├── wp-blog.html           # Vista de blog (WordPress)
├── wp-post.html           # Vista de post individual (WordPress)
├── style.css              # Estilos globales
├── componentes/
│   ├── components.js      # Componentes web (header y footer)
│   ├── header.html        # Plantilla del header
│   └── footer.html        # Plantilla del footer
└── README.md              # Documentación
```

## 🛠️ Configuración

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/blog-api-template.git
cd blog-api-template
```

2. Configura las APIs:

### Para Blogger:
1. Obtén tu API Key de Google Cloud Console
2. Encuentra tu Blog ID en la URL de tu blog de Blogger
3. Actualiza las constantes en `blog.html` y `post.html`:
```javascript
const API_KEY = 'TU_API_KEY';
const BLOG_ID = 'TU_BLOG_ID';
```

### Para WordPress:
1. Asegúrate de que tu sitio WordPress tenga habilitada la REST API
2. Actualiza la URL base en `wp-blog.html` y `wp-post.html`:
```javascript
const WP_URL = 'https://tu-sitio-wordpress.com/wp-json/wp/v2';
```

## 🚀 Uso

1. Inicia un servidor local:
```bash
python -m http.server 8000
```

2. Abre en tu navegador:
```
http://localhost:8000
```

## 🎨 Personalización

### Estilos
- Modifica `style.css` para cambiar colores, fuentes y diseño
- Actualiza las variables CSS para cambiar el tema global
- Personaliza los estilos de los componentes en `components.js`

### Componentes
- Edita `header.html` y `footer.html` para modificar la estructura
- Actualiza `components.js` para añadir nuevas funcionalidades
- Personaliza los estilos de los componentes web

### Contenido
- Ajusta el número de posts por página (`POSTS_POR_PAGINA`)
- Modifica la longitud de los extractos
- Personaliza el formato de fechas
- Añade nuevos metadatos a los posts

## 📝 Notas de Implementación

### Blogger API
- Utiliza la API v3 de Blogger
- Soporta paginación mediante tokens
- Extrae imágenes automáticamente del contenido
- Genera URLs amigables para SEO

### WordPress REST API
- Soporta categorías y filtrado
- Maneja imágenes destacadas
- Incluye metadatos completos
- URLs optimizadas para SEO

## 🤝 Contribución

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz fork del repositorio
2. Crea una rama para tu característica
3. Realiza tus cambios
4. Envía un pull request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- Google Blogger API
- WordPress REST API
- Comunidad de desarrolladores web

---

Desarrollado con ❤️ por Webgae.com