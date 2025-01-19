import { FaAngleDown, FaCheckCircle, FaStar } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";;

interface IReviews {
  rating?: string;
  name: string;
  para: string;
  id: number;
  date: string;
}

const star = [<FaStar key={1} />, <FaStar key={2} />, <FaStar key={3} />, <FaStar key={4} />, <FaStar key={5} />];

const allReviews: IReviews[] = [
  {
    name: "Samantha D.",
    para: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    id: 1,
    date: "Posted on August 14, 2023",
  },
  {
    name: "Alex M.",
    para: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    id: 2,
    date: "Posted on August 15, 2023",
  },
  {
    name: "Ethan R.",
    para: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    id: 3,
    date: "Posted on August 16, 2023",
  },
  {
    name: "Olivia P.",
    para: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    id: 4,
    date: "Posted on August 17, 2023",
  },
  {
    name: "Liam K.",
    para: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    id: 5,
    date: "Posted on August 18, 2023",
  },
  {
    name: "Ava H.",
    para: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    id: 6,
    date: "Posted on August 19, 2023",
  },
];

const check = <FaCheckCircle className="text-green-600" />;



// Inside your component
export default function AllReviews() {
  const [visibleReviews, setVisibleReviews] = useState(3);

  useEffect(() => {
    const updateVisibleReviews = () => {
      if (window.innerWidth >= 768) {
        // Medium (md) or large (lg) screens
        setVisibleReviews(6);
      } else {
        // Small screens
        setVisibleReviews(3);
      }
    };

    // Check on mount
    updateVisibleReviews();

    // Update on resize
    window.addEventListener("resize", updateVisibleReviews);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateVisibleReviews);
  }, []);

  const showMoreReviews = () => {
    setVisibleReviews((prev) => prev + 3);
  };

  return (
    <div className="px-4">
      {/* Header */}
      <div className="flex flex-col  md:flex-row justify-between items-center mb-5">
        <h2 className="text-lg font-semibold">All Reviews (451)</h2>
        <div className="flex gap-4 mt-5">
          <div className="w-[44px] h-[44px] rounded-full bg-[#F0F0F0]">
            <Image src={"/images/circleImg.png"} alt="circleImage" width={50} height={50} className="w-full h-full rounded-full" />
          </div>
          <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
            Latest <FaAngleDown />
          </div>
          <button className="bg-black px-[20px] py-2 text-white rounded-[62px]">Write a Review</button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {allReviews.slice(0, visibleReviews).map((review) => (
          <div key={review.id} className="border rounded-md p-4 shadow-sm hover:shadow-md transition-shadow">
            <p className="flex text-yellow-400">{star}</p>
            <p className="font-semibold flex items-center">
              {review.name} {check}
            </p>
            <p className="text-gray-700 my-2">{review.para}</p>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {visibleReviews < allReviews.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={showMoreReviews}
            className="bg-black text-white px-6 py-2 rounded-[62px] hover:bg-gray-800 transition-all"
          >
            Load More Reviews
          </button>
        </div>
      )}
    </div>
  );
}
