import NavMenuLinks from "./NavMenuLinks";

const NavMenu = () => {
  return (
    <div className="flex justify-between">
      <NavMenuLinks
        name="IQTEST"
        links={[
          { label: "Quiz", to: "/quiz" },
          { label: "Results", to: "/results" },
          { label: "Pricing", to: "/pricing" },
        ]}
      />
      <NavMenuLinks
        name="Support"
        links={[
          { label: "Help", to: "/help" },
          { label: "FAQ", to: "/faq" },
          { label: "Contacts", to: "/contacts" },
        ]}
      />
      <NavMenuLinks
        name="Legal"
        links={[
          { label: "Privacy Policy", to: "/privacy-policy" },
          { label: "Terms of Service", to: "/terms-of-service" },
          { label: "Cookies Policy", to: "/cookies-policy" },
        ]}
      />
    </div>
  );
};

export default NavMenu;
