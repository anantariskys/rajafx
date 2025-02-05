import { FC } from "react";

interface Props {
  children: React.ReactNode;
}
const TitleSection: FC<Props> = ({ children }) => {
  return <h3 className="text-center text-5xl font-semibold">{children}</h3>;
};

export default TitleSection;
