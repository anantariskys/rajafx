import SubTitleSection from "@/components/Section/SubTitleSection";
import TitleSection from "@/components/Section/TitleSection";
import  { FC, ReactNode } from "react";

interface SectionLayoutProps {
  children: ReactNode;
  title?: ReactNode;
  subTitle?: ReactNode;
  autoContainer?: boolean;
}

const SectionLayout: FC<SectionLayoutProps> = ({
  children,
  subTitle,
  title,
  autoContainer=true
}) => {
  return (
    <section className={`${autoContainer&&"container"} space-y-6`}>
      <div className="space-y-4">
        {title && <TitleSection>{title}</TitleSection>}
        {subTitle && <SubTitleSection>{subTitle}</SubTitleSection>}
      </div>
      {children}
    </section>
  );
};

export default SectionLayout;
