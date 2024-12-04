import { useState } from "react";

interface RatingProps {
  maxRating: number;
  color: string;

  onChange?: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ maxRating, color, onChange }) => {
  const [currentRating, setCurrentRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  //! Handle star click (set the current rating)
  const handleStarClick = (rating: number) => {
    setCurrentRating(rating);
    if (onChange) onChange(rating); // Call the callback if provided
  };

  //! Handle hover (set the hover rating for hover effects)
  const handleStarHover = (rating: number) => {
    setHoverRating(rating);
  };

  //! Handle mouse leave (reset the hover rating to the current rating)
  const handleStarLeave = () => {
    setHoverRating(currentRating);
  };

  return (
    <div className="star-rating">
      {[...Array(maxRating)].map((_, index) => {
        const starIndex = index + 1;
        const isFilled = starIndex <= (hoverRating || currentRating); // Determine if the star is filled based on hover or selected rating

        return (
          <span
            key={starIndex}
            className="star"
            onClick={() => handleStarClick(starIndex)}
            onMouseEnter={() => handleStarHover(starIndex)}
            onMouseLeave={handleStarLeave}
            style={{
              fontSize: "20px",
              color: isFilled ? color : "#ccc",
              cursor: "pointer",
              padding: 0,
            }}
          >
            &#9733; {/* Star character */}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
