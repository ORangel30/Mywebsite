import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
return [
  {
    url: 'https://apservicios.vercel.app',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    url: 'https://apservicios.vercel.app/#nosotros',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: 'https://apservicios.vercel.app/#servicios',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: 'https://apservicios.vercel.app/#proyectos',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: 'https://apservicios.vercel.app/#contacto',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
]
}
