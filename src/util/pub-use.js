export const getAssetsFile = (url) => {
  return new URL(`../assets/img/event/${url}`, import.meta.url).href
}

