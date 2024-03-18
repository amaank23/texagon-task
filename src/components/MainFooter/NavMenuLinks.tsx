export type LinksProp = {
  label: string;
  to: string;
}[];

type Props = {
  name: string;
  links: LinksProp;
};

const NavMenuLinks = ({ name, links }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-white text-base">{name}</span>
      {links.map((item) => {
        return (
          <span className="text-[#808080] text-base">
            <a href="">{item.label}</a>
          </span>
        );
      })}
    </div>
  );
};

export default NavMenuLinks;
