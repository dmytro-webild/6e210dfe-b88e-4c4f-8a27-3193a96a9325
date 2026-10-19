import { Outlet } from 'react-router-dom';

import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import NavbarFloatingLogo from "@/components/ui/NavbarFloatingLogo";
import FooterMinimal from "@/components/sections/footer/FooterMinimal";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarFloatingLogo
                  logo="Joseph Alexander"
                  logoImageSrc="https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp"
                  navItems={[
                    { name: "Work", href: "#work" },
                    { name: "About", href: "#about" },
                    { name: "Services", href: "#services" },
                    { name: "Contact", href: "#contact" },
                  ]}
                  ctaButton={{ text: "Contact", href: "#contact" }}
                />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterMinimal
                brand="Alexander"
                copyright="© 2026 Joseph Alexander. All rights reserved."
                socialLinks={[
                  { icon: "Twitter", href: "#" },
                  { icon: "Linkedin", href: "#" },
                  { icon: "Instagram", href: "#" },
                ]}
              />
    </StyleProvider>
  );
}
