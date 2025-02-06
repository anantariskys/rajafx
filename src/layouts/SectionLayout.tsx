import SubTitleSection from "@/components/Section/SubTitleSection";
import TitleSection from "@/components/Section/TitleSection";
import { Icon } from "@iconify/react/dist/iconify.js";
import  { FC, ReactNode } from "react";

interface SectionLayoutProps {
  children: ReactNode;
  title?: ReactNode;
  subTitle?: ReactNode;
  icon?: string;
  autoContainer?: boolean;
}

const SectionLayout: FC<SectionLayoutProps> = ({
  children,
  subTitle,
  title,
  autoContainer=true,
  icon
}) => {
  return (
    <section className={`${autoContainer&&"container"} py-24 space-y-6`}>
      <div className="space-y-4">
        {
          icon&&(
            <div className="p-4 bg-[#E8F1FD] text-2xl w-fit mx-auto  rounded-full text-[#09326C]">
          <Icon icon={icon} />
        </div>
          )
        }
    
        {title && <TitleSection>{title}</TitleSection>}
        {subTitle && <SubTitleSection>{subTitle}</SubTitleSection>}
      </div>
      {children}
    </section>
  );
};

export default SectionLayout;
