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
                  logo="Aion"
                  logoImageSrc="https://storage.googleapis.com/webild/users/user_3Fk11DM8jkTaVwbvzwOo9lviWTJ/uploaded-1792435973492-pm6dm5hp.png"
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
                brand="Aion"
                copyright="© 2026 Aion. All rights reserved."
                socialLinks={[
                  { icon: "Instagram", href: "https://www.instagram.com/aionlabs.ia/" },
                  { icon: "Whatsapp", href: "https://wa.me/5511970224588" },
                ]}
              />
    </StyleProvider>
  );
}
