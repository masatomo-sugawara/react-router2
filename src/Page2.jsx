import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです。</h1>
      <Link to="page2/99999">URL Parameter</Link>
    </div>
  );
};
