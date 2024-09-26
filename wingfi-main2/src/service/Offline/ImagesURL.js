export const productImageURL = ({ Sku, ImageName }) => {
  return `https://firebasestorage.googleapis.com/v0/b/wingfi-9b5b7.appspot.com/o/pro%2F${Sku}%2F${ImageName}.webp?alt=media`;
};
