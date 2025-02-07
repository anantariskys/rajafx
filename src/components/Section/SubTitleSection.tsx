import { FC } from "react";

interface Props {
  children: React.ReactNode;
}
const SubTitleSection: FC<Props> = ({ children }) => {
  return <p className="text-center max-w-5xl mx-auto  font-light">{children}</p>;
};

export default SubTitleSection;
