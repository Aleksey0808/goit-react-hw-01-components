export default function randomColor() {
  return `#${Math.floor(((Math.random() + 2) * 16777215) | 0)
    .toString(16)
    .slice(1)}`;
}
