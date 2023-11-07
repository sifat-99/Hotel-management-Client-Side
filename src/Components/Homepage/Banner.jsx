import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
 
export function CarouselCustomNavigation() {

    const [images, setImages] = useState([]);

useEffect(() => {
    fetch('FakeData.json')
    .then(res => res.json())
    .then(data => setImages(data))
    .catch(err => console.log(err))

}
, [])


  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >

      {
            images.map((image, index) => (
                <img
                key={index}
                src={image?.image}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            
            ))
      }
    </Carousel>
  );
}