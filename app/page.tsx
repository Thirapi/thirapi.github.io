import { Link } from "@heroui/link";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Avatar, AvatarGroup, AvatarIcon } from "@heroui/avatar";
import { Image } from "@heroui/image";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block max-w-xl text-start justify-center">
        <Card className="max-w-[400px] mb-4">
          <CardHeader className="justify-between">
            <div className="flex gap-3">
            <Avatar
              isBordered
              color="default"
              radius="full"
              size="md"
              src="https://pbs.twimg.com/profile_images/1775195625120051202/MqURU8VP_400x400.jpg"
            />
            <div className="flex flex-col">
              <p className="text-small">faiqthirapi</p>
              <Link
                isExternal
                className="text-small"
                href="https://x.com/faiqthirapi"
              >
                @faiqthirapi
              </Link>
            </div>
            </div>
            <FaXTwitter />
          </CardHeader>
          <CardBody className="pt-0">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://pbs.twimg.com/media/GhvX9sJagAA8l0w?format=jpg&name=360x360"
              width={400}
            />
          </CardBody>
        </Card>
        <Card className="max-w-[400px]">
        <CardHeader className="justify-between">
            <div className="flex gap-3">
            <Avatar
              isBordered
              color="default"
              radius="full"
              size="md"
              src="https://pbs.twimg.com/profile_images/1775195625120051202/MqURU8VP_400x400.jpg"
            />
            <div className="flex flex-col">
              <p className="text-small">faiqthirapi</p>
              <Link
                isExternal
                className="text-small"
                href="https://x.com/faiqthirapi"
              >
                @faiqthirapi
              </Link>
            </div>
            </div>
            <FaXTwitter />
          </CardHeader>
          <CardBody className="pt-0">
            <p className="text-md">
              hi! (👋), aku thirapi seorang pengembang perangkat lunak (pemula)
              yang antusias dengan teknologi terbaru dan selalu bersemangat
              untuk belajar hal-hal baru.
            </p>
          </CardBody>
        </Card>
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/avatar.png"
          width={200}
        />
      </div>

      <div
        aria-hidden="true"
        className="fixed dark:md:block dark:opacity-100 -bottom-[-30%] sm:-bottom-[0%] 2xl:-bottom-[30%] -left-[0%] z-0 pointer-events-none"
      >
        <img
          src="/bg-shape.svg"
          className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
          alt="docs left background"
          data-loaded="true"
        />
      </div>
    </section>
  );
}
