import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    /**このidの名称はなんでもOK */
    path: "/:id",
    exact: true,
    children: <UrlParameter />
  }
];
