import Link from "next/link";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  CardBody,
} from "@heroui/react";
import {
  SiCloudflare,
  SiCss3,
  SiDrizzle,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMarkdown,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVitest,
  SiShadcnui,
} from "@icons-pack/react-simple-icons";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import {
  LuMapPin,
  LuLink,
  LuTwitter,
  LuInstagram,
  LuGithub,
} from "react-icons/lu";
import Marquee from "react-fast-marquee";

interface ProjectProps {
  className?: string;
}

export default function About({ className }: ProjectProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const locationToAngles = (lat: number, long: number): [number, number] => {
    return [
      Math.PI - ((long * Math.PI) / 180 - Math.PI / 2),
      (lat * Math.PI) / 180,
    ];
  };
  const focusTarget = useRef<[number, number] | null>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    let theta = 0.3;
    const autoRotateSpeed = 0.005;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 2.5,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [1, 0, 0],
      glowColor: [1.2, 1.2, 1.2],
      markers: [{ location: [-7.599122, 111.910515], size: 0.1 }],
      scale: 1.5,
      onRender: (state) => {
        if (focusTarget.current) {
          phi += (focusTarget.current[0] - phi) * 0.1;
          theta += (focusTarget.current[1] - theta) * 0.1;

          const dPhi = Math.abs(focusTarget.current[0] - phi);
          const dTheta = Math.abs(focusTarget.current[1] - theta);
          if (dPhi < 0.001 && dTheta < 0.001) {
            focusTarget.current = null;
          }
        } else {
          phi += autoRotateSpeed;
        }

        state.phi = phi;
        state.theta = theta;
        state.width = width * 2;
        state.height = width * 2;
      },
    });
    if (canvasRef.current) {
      canvasRef.current.style.opacity = "1";
    }

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const SOCIAL_LINKS = [
    {
      href: "https://twitter.com/faiqthirapi",
      title: "Twitter",
      icon: () => <LuTwitter className="text-blue-600" />,
    },
    {
      href: "https://instagram.com/faiqthirapi",
      title: "Instagram",
      icon: () => <LuInstagram className="text-blue-600" />,
    },
    {
      href: "https://github.com/thirapi",
      title: "Github",
      icon: () => <LuGithub className="text-blue-600" />,
    },
  ];
  return (
    <div className={`${className} flex flex-col gap-6`} id="about">
      <Link href="#about">
        <h1 className="text-xl sm:text-5xl font-bold text-center pb-8 after:content-['_↗']">
          About Me
        </h1>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 sm:col-span-1">
          <Card className="h-[300px]">
            <CardHeader className="flex-col !items-start">
              <span className="flex items-center text-xl text-white/60 font-bold gap-1">
                <LuLink className="text-blue-600" />
                <p className="hover:underline">Contact</p>
              </span>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="flex flex-col gap-4 px-2">
                {SOCIAL_LINKS.map((link) => {
                  const { href, title, icon } = link;

                  const Icon = icon;

                  return (
                    <Link
                      key={href}
                      href={href}
                      className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-3 transition-colors"
                    >
                      <span className="size-[18px]">
                        <Icon />
                      </span>
                      <h3>{title}</h3>
                    </Link>
                  );
                })}
              </div>
            </CardBody>
          </Card>

          <Card className="h-[300px] bg-gray-900">
            <CardHeader className="flex-col !items-start">
              <span className="flex items-center text-xl text-white/60 font-bold gap-1">
                <LuLink className="text-blue-600" />
                <p className="hover:underline">Tech Stack</p>
              </span>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Marquee className="py-6" pauseOnHover>
                <SiHtml5 className="size-16 mx-8" />
                <SiCss3 className="size-16 mx-8" />
                <SiJavascript className="size-16 mx-8" />
                <SiTypescript className="size-16 mx-8" />
                <SiTailwindcss className="size-16 mx-8" />
                <SiNextdotjs className="size-16 mx-8" />
                <SiReact className="size-16 mx-8" />
                <SiPostgresql className="size-16 mx-8" />
                <SiRadixui className="size-16 mx-8" />
                <SiShadcnui className="size-16 mx-8" />
              </Marquee>
              <Marquee className="py-6" direction="right" pauseOnHover>
                <SiPrisma className="size-16 mx-8" />
                <SiMysql className="size-16 mx-8" />
                <SiGit className="size-16 mx-8" />
                <SiVite className="size-16 mx-8" />
                <SiDrizzle className="size-16 mx-8" />
                <SiVitest className="size-16 mx-8" />
                <SiNodedotjs className="size-16 mx-8" />
                <SiReactquery className="size-16 mx-8" />
              </Marquee>
            </CardBody>
          </Card>
        </div>

        <Card className="h-full sm:row-span-1">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <span className="flex items-center text-xl text-white/60 font-bold gap-1">
              <LuMapPin className="text-blue-600" />
              <button
                className="hover:underline"
                onClick={() => {
                  focusTarget.current = locationToAngles(-7.599122, 111.910515);
                }}
              >
                Indonesia
              </button>
            </span>
          </CardHeader>
          <canvas
            ref={canvasRef}
            className="z-0 w-full h-full object-cover"
            style={{
              width: "100%",
              height: "100%",
              contain: "layout paint size",
              opacity: 0,
              transition: "opacity 1s ease",
            }}
          />
        </Card>
      </div>

      <div className="flex justify-center mt-6">
        <Button variant="ghost" color="default" size="lg">
          Know more
        </Button>
      </div>
    </div>
  );
}
