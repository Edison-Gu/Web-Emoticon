import React, { useState } from "react";
import Waterfall from "waterfalljs-layout/react";

const defimages = [
  "https://picsum.photos/640/200/?random",
  "https://picsum.photos/360/640/?random",
  "https://picsum.photos/480/720/?random",
  "https://picsum.photos/480/640/?random",
  "https://picsum.photos/360/?random",
  "https://picsum.photos/360/520/?random",
  "https://picsum.photos/520/360/?random",
  "https://picsum.photos/520/360/?random",
  "https://picsum.photos/520/360/?random",
  "https://picsum.photos/720/640/?random"
];

const customStyle = `#react-waterfall-comps li>div {
  border-radius: 8px;
  font-size: 20px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 20px;
  padding: 6px;
  background: rgb(255, 255, 255);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s
}
#react-waterfall-comps li>div:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.3);
  transition: all 0.3s
}
#react-waterfall-comps li>div>img {
  width: 100%
}`;

export default function WaterfallPositionDemo() {
  const [images, setImages] = useState(defimages);

  const handleSearchImage = async () => {
    function random(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
    }
    const arr = [];
    for (let i = 0; i < 9; i++) {
      const imgSrc = `${defimages[i]}=${random(1, 10000)}`;
      arr.push(imgSrc);
    }
    setImages((prev) => [...prev, ...arr]);
  };
  return (
    <div
      style={{
        height: "600px",
        width: "520px",
        border: "1px solid",
        marginTop: "30px",
        overflowY: "scroll"
      }}
    >
      <Waterfall
        columnWidth={236}
        columnCount={2}
        columnGap={24}
        rowGap={24}
        customStyle={customStyle}
      >
        {images.map((item, index) => {
          return (
            <li key={index} onClick={() => alert("图片地址为:" + item)}>
              <div>
                {index + 1}
                <img src={item} alt="" />
              </div>
            </li>
          );
        })}
      </Waterfall>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => handleSearchImage()}
          style={{ margin: "30px auto" }}
        >
          LOAD MORE
        </button>
      </div>
    </div>
  );
}
