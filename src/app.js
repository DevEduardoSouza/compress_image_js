import sharp from "sharp";

const inputPath = "teste.png";

const compress_image = (inputPath) => {
  try {
    if (!inputPath) throw new Error("image input path not set");

    const outputPath = `output_${Date.now()}.jpg`;

    sharp("./src/input.png").jpeg({ quality: 50 }).toFile(outputPath);

    console.log("Imagem comprimida salva em:", outputPath);
  } catch (error) {
    console.log(error);
  }
};

compress_image(inputPath);
