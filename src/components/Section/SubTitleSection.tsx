import { FC } from "react";

interface Props {
  children: React.ReactNode;
}
const SubTitleSection: FC<Props> = ({ children }) => {
  return <p className="text-center  font-light">{children}</p>;
};

export default SubTitleSection;
