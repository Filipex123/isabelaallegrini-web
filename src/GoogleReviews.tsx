import { Loader2, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

interface IReview {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

interface IGoogleReview {
  rating: number;
  reviews: IReview[];
}

export default function GoogleReviews() {
  const [googleReview, setGoogleReview] = useState<IGoogleReview>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://0gufd5a7c8.execute-api.us-east-1.amazonaws.com/prod/avaliacoes')
      .then((res) => res.json())
      .then((data) => {
        setGoogleReview(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && (
        <>
          <div></div>
          <div>
            <Loader2 className="w-5 h-5 animate-spin" />
          </div>
          <div></div>
        </>
      )}
      {!isLoading && (
        <>
          {googleReview?.reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#c59878] text-[#c59878]" />
                  ))}
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 italic">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <p className="text-sm md:text-base font-light text-[#c59878]">{review.author_name}</p>
                <p className="text-xs md:text-sm text-gray-500">{review.relative_time_description}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
