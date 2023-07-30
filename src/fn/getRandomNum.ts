export default function getRandomNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
