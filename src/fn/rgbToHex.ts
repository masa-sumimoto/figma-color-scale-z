export default function rgbToHex(rgb: number[]) {
  return (
    "#" +
    rgb
      .map((value) => {
        return ("0" + value.toString(16)).slice(-2);
      })
      .join("")
  );
}
