const convertReview = (data) => ({
  comment: data.comment,
  date: data.date,
  rating: data.rating,
  user: {
    avatarUrl: data.user.avatar_url,
    id: data.user.id,
    isPro: data.user.is_pro,
    name: data.user.name,
  }
});

export default convertReview;
