"use client";

import { CompanyBrand } from "@/components/layout/company-brand";
import { LanguageButton } from "@/components/layout/nav/language-button";
import { LinkItem } from "@/components/layout/nav/link-item";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { Link, usePathname } from "@/i18n/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { ComponentProps, useState } from "react";

type LinkHrefType = ComponentProps<typeof Link>["href"];

type linkItemsType = {
  href: LinkHrefType;
  text: string;
}[];

export function Navigation() {
  const t = useTranslations("Navigation");

  const linkItems = [
    {
      href: "/naturalne-rozwiazanie",
      text: t("naturalSolution"),
    },
    {
      href: "/atuty",
      text: t("advantages"),
    },
    {
      href: "/jak-stosowac",
      text: t("howToUse"),
    },
    {
      href: "/oferta",
      text: t("offer"),
    },
    {
      href: "/kontakt",
      text: t("contact"),
    },
  ] as linkItemsType;

  const pathname = usePathname();

  const { scrollY } = useScroll();
  // state for hiding navigation when scrolling down and showing when scrolling up
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // state for mobile drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <motion.header
      className="fixed z-40 top-0 w-full flex justify-between gap-16 3xl:gap-24 items-end  min-[1338px]:items-center pt-6 px-6 sm:px-24 3xl:px-44"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-200%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {/* Logo */}
      <CompanyBrand />

      {/* Desktop Navigation links */}
      <nav className="group hidden min-[1338px]:flex w-full 2xl:w-fit gap-3 2xl:gap-12 flex-wrap justify-evenly  border-2 rounded-full px-8 py-2 bg-gradient-to-r from-background/75 to-background/45 backdrop-blur-sm hover:scale-101 transition-transform">
        {linkItems.map((item) => {
          return (
            <LinkItem
              key={item.href.toString()}
              href={item.href}
              active={pathname === item.href}
            >
              {item.text}
            </LinkItem>
          );
        })}
        <LanguageButton />
      </nav>

      {/* Mobile Navigation - Hamburger Menu */}
      <div className="min-[1338px]:hidden">
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="bg-background/50 w-fit h-fit p-2"
            >
              <Menu className="size-8" />
              <span className="sr-only">Menu</span>
            </Button>
          </DrawerTrigger>

          <DrawerContent className="bg-gradient-to-tr from-background/90 to-background/45 backdrop-blur-sm">
            <div className="pb-22 pt-16 flex flex-col items-center">
              <div className="pb-6">
                <DrawerTitle className="px-6 pb-3">Menu</DrawerTitle>
                <Separator className="bg-foreground" />
              </div>
              <nav className="flex flex-col items-center gap-4">
                {linkItems.map((item) => (
                  <DrawerClose asChild key={item.href.toString()}>
                    <LinkItem
                      key={item.href.toString()}
                      href={item.href}
                      active={pathname === item.href}
                    >
                      {item.text}
                    </LinkItem>
                  </DrawerClose>
                ))}
                <LanguageButton />
              </nav>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </motion.header>
  );
}
