const convertOffer = (data) => ({
  city: {
    name: data.city.name,
    location: {
      latitude: data.city.location.latitude,
      longitude: data.city.location.longitude,
      zoom: data.city.location.zoom,
    },
  },
  cityName: data.city.name,
  photos: data.images,
  src: data.preview_image,
  heading: data.title,
  caption: data.title,
  isFavorite: data.is_favorite,
  premium: data.is_premium,
  rating: data.rating,
  type: data.type,
  bedroomsNumber: data.bedrooms,
  maxGuests: data.max_adults,
  price: data.price,
  list: data.goods,
  host: {
    id: data.host.id,
    name: data.host.name,
    superStatus: data.host.is_pro,
    avatar: data.host.avatar_url
  },
  describtion: data.description,
  location: {
    latitude: data.location.latitude,
    longitude: data.location.longitude,
    zoom: data.location.zoom
  },
  coordinates: [data.location.latitude, data.location.longitude],
  id: data.id,
});

export default convertOffer;
