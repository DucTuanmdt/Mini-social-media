function Avatar({ url, size, alt }) {
  return <img className={`image-avatar ${size}`} src={url} alt={alt} />;
}

Avatar.defaultProps = {
  url: "/assets/avatar-placeholder.png",
  alt: "avatar",
  size: "",
};

export default Avatar;
