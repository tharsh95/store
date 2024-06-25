/* eslint-disable react/prop-types */

const StarGenerator = ({ numberOfStars }) => {
  const generateStars = () => {
    const stars = [];
    const starsCount = numberOfStars || 5;
    for (let i = 0; i < 5; i++) {
      if (i < starsCount) {
        stars.push(<span key={i}>&#9733;</span>);
      } else {
        stars.push(<span key={i}>&#9734;</span>);
      }
    }
    return stars;
  };

  return <div>{generateStars()}</div>;
};

export default StarGenerator;
