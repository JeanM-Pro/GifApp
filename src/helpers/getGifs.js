export const getGifs = async (category, cantidad) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=FlQKIU9FDP8rKCM4Di8rHTY2ra2MgYSc&q=${category}&limit=${cantidad}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
