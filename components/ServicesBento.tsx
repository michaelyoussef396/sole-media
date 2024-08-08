import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function ServicesBento() {
  return (
    <BentoGrid className="max-w-4xl mx-auto ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={`p-4 rounded-lg bg-white shadow-md ${i === 3 || i === 6 ? "md:col-span-2" : ""}`}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-mischka bg-baliHai to-bermudaGray"></div>
);

const items = [
  {
    title: "Web Design Excellence",
    description: "Craft stunning and responsive websites tailored to your needs.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-wedgewood" />,
  },
  {
    title: "SEO Mastery",
    description: "Boost your online presence and drive organic traffic.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-wedgewood" />,
  },
  {
    title: "Digital Advertising",
    description: "Maximize your reach with targeted online advertising campaigns.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-wedgewood" />,
  },
  {
    title: "Email Marketing Magic",
    description: "Engage your audience with personalized email campaigns.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-wedgewood" />,
    className: "md:col-span-2",
  },
  {
    title: "Professional Photoshoots",
    description: "Capture the perfect moments with our professional photoshoots.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-wedgewood" />,
  },
  {
    title: "Graphic Design Genius",
    description: "Create visually stunning graphics that tell your brand’s story.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-wedgewood" />,
  },
  {
    title: "Content Creation Wizardry",
    description: "Generate compelling content that captivates your audience.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-wedgewood" />,
    className: "md:col-span-2",
  },
];
