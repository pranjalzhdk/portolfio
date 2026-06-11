export const siteQuery = `*[_type == "site" && _id == "siteSettings"][0]`;

export const homepageQuery = `*[_type == "homepage" && _id == "homepageSettings"][0]`;

export const aboutQuery = `*[_type == "about" && _id == "aboutSettings"][0]`;

export const playgroundQuery = `*[_type == "playground" && _id == "playgroundSettings"][0]`;

export const projectsQuery = `*[_type == "project"] | order(_updatedAt desc) {
  ...,
  "slug": slug.current
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  ...,
  "slug": slug.current
}`;

export const projectByIdQuery = `*[_type == "project" && _id == $id][0] {
  ...,
  "slug": slug.current
}`;

export const researchQuery = `*[_type == "research"] | order(_updatedAt desc)`;

export const researchByIdQuery = `*[_type == "research" && (_id == $id || researchId == $id)][0]`;

export const mediaQuery = `*[_type == "mediaAsset"] | order(_createdAt desc) {
  ...,
  "imageUrl": image.asset->url,
  "fileUrl": file.asset->url,
  "mimeType": coalesce(file.asset->mimeType, image.asset->mimeType),
  "size": coalesce(file.asset->size, image.asset->size)
}`;
