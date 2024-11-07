import { v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";

dotenv.config();

export function get_Image(image_url) {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
  });

  const url = cloudinary.url(image_url, {
    transformation: [
      {
        quality: "auto",
      },
    ],
  });
}

export function Upload(image_path) {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  (async function () {
    try {
      const result = await cloudinary.uploader.upload(image_path);
      console.log(result);

      const url = cloudinary.url(result.public_id, {
        transformation: [
          {
            quality: "auto",
          },
        ],
      });
      return url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
    }
  })();
}
