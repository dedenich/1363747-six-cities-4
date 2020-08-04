const convertAuthData = (data) => ({
  id: data.id,
  email: data.email,
  name: data.name,
  avatar: data.avatar_url,
  superStatus: data.is_pro,
});

export default convertAuthData;
