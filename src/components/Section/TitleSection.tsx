import { FC } from "react";

interface Props {
  children: React.ReactNode;
}
const TitleSection: FC<Props> = ({ children }) => {
  return <h2 className="text-center text-4xl md:text-5xl font-semibold">{children}</h2>;
};

export default TitleSection;
