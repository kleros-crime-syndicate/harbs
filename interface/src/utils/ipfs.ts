import axios from "axios";

export const uploadToIPFS = async (fileName: string, buffer: ArrayBufferLike) => {
  const result = await axios.post("https://ipfs.kleros.io/add", {
    fileName,
    buffer,
  });
  const data = result.data.data;
  return `${data[1].hash}${data[0].path}`;
};

export const ipfs = (uri: string) => `https://ipfs.kleros.io/ipfs/${uri}`;
