import Link from "next/link";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader, Image } from "@heroui/react";
import { redirect } from "next/navigation";
import { LuChevronsLeftRightEllipsis } from "react-icons/lu";

interface ProjectProps {
  className?: string;
}

export default function Project({ className }: ProjectProps) {
  const list = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/as3f4cd4vf4fd4c.jpg",
      href: "#",
      year: "2024",
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      href: "#",
      img: "/as3f4cd4vf4fd4c.jpg",
      year: "2023",
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      href: "#",
      img: "/as3f4cd4vf4fd4c.jpg",
      year: "2022",
    },
    {
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      href: "#",
      img: "/as3f4cd4vf4fd4c.jpg",
      year: "2021",
    },
  ];

  return (
    <div className={className} id="projects">
      <Link href="#projects">
        <h1
          className="text-xl sm:text-5xl font-bold text-center pb-8 after:content-['_↗']"
        >
          Projects
        </h1>
      </Link>
      <div className="gap-6 grid grid-cols-2 sm:grid-cols-2">
        {list.slice(0, 4).map((item, index) => (
          <Card
            key={index}
            isPressable
            isBlurred
            isFooterBlurred
            shadow="sm"
            onPress={() => redirect(item.href)}
            className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <span className="flex items-center text-xl text-gray-500 gap-1">
                <LuChevronsLeftRightEllipsis className="text-blue-600" />
                <p className="hover:underline">Project</p>
              </span>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt={item.title}
                className="w-full object-cover h-[180px]"
                radius="lg"
                shadow="sm"
                src={item.img}
                width="100%"
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <p className="truncate text-sm max-w-full">
                <b>{item.title}:</b> {item.description}
              </p>
              <p className="text-default-500">{item.year}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Button variant="ghost" color="default" size="lg">
          See all projects
        </Button>
      </div>
    </div>
  );
}
