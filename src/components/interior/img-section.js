import React from 'react';

const ImgSection = ({imgs, caption}) => {

  const imageColumns = imgs.map((img) => {
    const { url, style, backgroundImg } = img;

    const defaultStyle = {backgroundImage: `url(${url})`};

    if (backgroundImg) {
      return (
        <div className="col" key={img}>
          <div className="col--img" style={style ? Object.assign(defaultStyle, style) : defaultStyle} />
        </div>
      );
    }

    return <img src={url} />
  });

  const imgCaption = caption && true ? <span className="img-caption">{caption}</span> : null;

  return (
    <>
      <div className="par par__img-container">
        {imageColumns}
      </div>
      {imgCaption}
      <div className="overlay"/>
    </>
  );
}

export default ImgSection;