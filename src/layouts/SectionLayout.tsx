import SubTitleSection from "@/components/Section/SubTitleSection";
import TitleSection from "@/components/Section/TitleSection";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FC, ReactNode } from "react";

interface SectionLayoutProps {
  children: ReactNode;
  title?: ReactNode;
  subTitle?: ReactNode;
  icon?: string;
  autoContainer?: boolean;
  backgroundColor?: string;
  variant? : "XM"|"Valetax"
}

const SectionLayout: FC<SectionLayoutProps> = ({
  children,
  subTitle,
  title,
  autoContainer = true,
  icon,
  backgroundColor,
  variant='XM'
}) => {
  let className = "";
  switch (variant) {
    case "XM":
      className = "text-[#09326C] bg-[#E8F1FD]";
      break;
    case "Valetax":
      className = "text-[#25C660] bg-[#E9F9EF]";
  }
  return (
    <section className={`${backgroundColor}  ${backgroundColor==="bg-[#141921]"?"text-white":""}`}>
      <div className={`${autoContainer && "container"}  lg:py-24 space-y-6`}>
        <div className="space-y-4">
          {icon && (
            <div className={`${className} p-4 text-2xl w-fit mx-auto  rounded-full `}>
              <Icon icon={icon} />
            </div>
          )}

          {title && <TitleSection>{title}</TitleSection>}
          {subTitle && <SubTitleSection>{subTitle}</SubTitleSection>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
